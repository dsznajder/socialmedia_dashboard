import React, { Component, PropTypes } from 'react';

export default class AttachmentsList extends Component
{
  static propTypes = {
    attachments: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className='attachments'>
        <hr/>
        {this.props.attachments.map(attachment => {
          return (
            <img
              alt={attachment.attachment_file_name}
              height={60}
              key={attachment.id}
              src={attachment.attachment_url}
            />
          )
        })}
        <hr/>
      </div>
    )
  }
}
