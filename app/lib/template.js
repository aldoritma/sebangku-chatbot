'use strict';

/**
* Text Message
* @argument string message
*/
export function text(message) {
  return {
    "type": "text",
    "text": message
  }
}


/**
* Image Message
* @argument string url original
*
*/
export function image(original, preview) {
  return {
    "type": "image",
    "originalContentUrl": original,
    "previewImageUrl": preview
  }
}


/**
* Image Message
* @argument string url source video
* @argument string url preview image thumbnail
*
*/
export function image(source, preview) {
  return {
      "type": "video",
      "originalContentUrl": source,
      "previewImageUrl": preview
  }
}



/**
* Confirm Message Template
* @argument string message
*/

export function  confirmMessage(message){
  return {
    "type": "template",
    "altText": "This is a confirm template",
    "template": {
        "type": "confirm",
        "text": message,
        "actions": [
            {
              "type": "message",
              "label": "Yes",
              "text": "yes"
            },
            {
              "type": "message",
              "label": "No",
              "text": "no"
            }
        ]
    }
  }
};


/**
* Button Message Template
* @argument {array of action button}
* action btn obj
* {
*  "type": "uri",
*  "label": "View detail",
*  "uri": "http://example.com/page/123"
* }
*/

export function buttonMessage(arr){
  return {
    "type": "template",
    "altText": "This is a buttons template",
    "template": {
        "type": "buttons",
        "thumbnailImageUrl": "https://example.com/bot/images/image.jpg",
        "imageAspectRatio": "rectangle",
        "imageSize": "cover",
        "imageBackgroundColor": "#FFFFFF",
        "title": "Menu",
        "text": "Please select",
        "defaultAction": {
            "type": "uri",
            "label": "View detail",
            "uri": "http://example.com/page/123"
        },
        "actions": arr
    }
  }

};
