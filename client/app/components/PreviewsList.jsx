import React, { Component, PropTypes } from 'react';

export default class PreviewsList extends Component {
  static propTypes = {
    files: PropTypes.array.isRequired,
    removeFile: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className='upload-preview'>
        {this.props.files.map(file => {
          return (
            <img
              alt={file.name}
              height='60'
              key={file.preview}
              onDoubleClick={this.removeFile}
              src={file.preview}
              title='Double click to remove'
            />
          )
        })}
      </div>
    );
  }
}
