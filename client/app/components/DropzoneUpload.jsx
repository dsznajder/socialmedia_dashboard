import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import PreviewsList from './PreviewsList'

export default class DropzoneUpload extends Component {
  static propTypes = {
    files: PropTypes.array.isRequired,
    filesChanged: PropTypes.func.isRequired
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    const files = [
      ...this.props.files,
      ...acceptedFiles
    ];

    this.props.filesChanged(files);
  }

  removeFile = (event) => {
    const filesLeft = this.props.files.filter(file => file.preview !== event.target.src)

    // Pass files that are left to props method
    this.props.filesChanged(filesLeft);

    // Remove object url references
    window.URL.revokeObjectURL(event.target.src);
  }

  render() {
    return (
      <div>
        <PreviewsList files={this.props.files} removeFile={this.removeFile} />
        <Dropzone
          accept={'image/png, image/jpeg, image/gif'}
          activeStyle={{ borderColor: 'green' }}
          onDrop={this.onDrop}
          rejectStyle={{ borderColor: 'red' }}
          style={{ border: '2px dashed black', padding: '10px', maxWidth: 200 }}
        >
          <div>Drop files here</div>
        </Dropzone>
      </div>
    );
  }
}
