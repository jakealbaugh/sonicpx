import audioContext from '../globals/audioContext';
import AudioPlayer from './AudioPlayer';
import AudioToImage from '../adapters/AudioToImage';
import Canvas from './Canvas';
import File from './File';

export default class Recorder {
  constructor() {
    this.audio = new AudioPlayer({
      $element: document.querySelector('.recorder .audio')
    });
    this.file = new File({
      accept: 'audio/*',
      $parent: document.querySelector('.recorder .file'),
      handleChange: this.handleFileChange.bind(this)
    });
  }

  handleFileChange(target, file) {
    this.audio.progress(0);
    this.audio.disable();
    this.file.disable();
    this.element = new Audio();
    this.element.setAttribute('crossorigin', 'anonymous');
    this.element.src = target.result;
    if (this.converter) this.converter.remove();
    this.audio.bindPlay(() => {
      this.initializeElement();
    });
    this.element.addEventListener('canplay', () => {
      this.audio.enable();
    });
  }

  initializeElement() {
    this._recordElement();
    this.element.addEventListener('ended', () => this.converter.stop());
  }

  _recordElement() {
    let stereo = document.querySelector('#stereo').checked;
    this.converter = new AudioToImage({
      duration: this.element.duration,
      bits: 16,
      stereo
    });
    this.input = audioContext.createMediaElementSource(this.element);
    let bufferSize = 8192,
      channels = stereo ? 2 : 1;
    this.processor = audioContext.createScriptProcessor(
      bufferSize,
      channels,
      channels
    );
    // specify the processing function
    this.processor.onaudioprocess = data => {
      this.audio.progress(this.element.currentTime / this.element.duration);
      this.converter.process(data);
    };
    // connect stream to our processor
    this.input.connect(this.processor);
    this.input.connect(audioContext.destination);
    this.element.onended = () => {
      this.audio.progress(1);
      this.file.enable();
      this.converter.handleEnd();
      this.input.disconnect(this.processor);
      this.input.disconnect(audioContext.destination);
      this.processor.disconnect(audioContext.destination);
      this.processor.onaudioprocess = null;
      delete this.element;
      delete this.input;
      delete this.processor;
    };
    // connect our processor to the previous destination
    this.processor.connect(audioContext.destination);
    this.element.play();
  }
}
