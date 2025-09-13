import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsMainSwiper extends Struct.ComponentSchema {
  collectionName: 'components_components_main_swipers';
  info: {
    displayName: 'main-swiper';
  };
  attributes: {
    desc: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.main-swiper': ComponentsMainSwiper;
      'sections.about': SectionsAbout;
    }
  }
}
