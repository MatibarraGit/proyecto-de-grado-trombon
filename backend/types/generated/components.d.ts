import type { Schema, Struct } from '@strapi/strapi';

export interface ImagesDataImg extends Struct.ComponentSchema {
  collectionName: 'components_images_data_imgs';
  info: {
    displayName: 'media';
    icon: 'picture';
  };
  attributes: {};
}

export interface MediaDataMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_data_media';
  info: {
    displayName: 'Media';
    icon: 'picture';
  };
  attributes: {
    category: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    isYoutubeVideo: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    size: Schema.Attribute.Enumeration<['small', 'medium', 'large']>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    youtubeVideoId: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MediaDataVideoUrl extends Struct.ComponentSchema {
  collectionName: 'components_media_data_video_urls';
  info: {
    displayName: 'videoUrl';
    icon: 'play';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
    videoId: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'images-data.img': ImagesDataImg;
      'media-data.media': MediaDataMedia;
      'media-data.video-url': MediaDataVideoUrl;
    }
  }
}
