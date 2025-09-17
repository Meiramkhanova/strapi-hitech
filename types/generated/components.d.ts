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

export interface SectionsMainNews extends Struct.ComponentSchema {
  collectionName: 'components_sections_main_news';
  info: {
    displayName: 'main-news';
  };
  attributes: {
    createdTime: Schema.Attribute.Date;
    newsDesc: Schema.Attribute.Text;
    newsImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    newsTitle: Schema.Attribute.String;
  };
}

export interface SectionsSections extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'sections';
  };
  attributes: {};
}

export interface SectionsTabContentMainSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_tab_content_main_sections';
  info: {
    displayName: 'TabContentMainSection';
  };
  attributes: {
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.main-swiper': ComponentsMainSwiper;
      'sections.about': SectionsAbout;
      'sections.main-news': SectionsMainNews;
      'sections.sections': SectionsSections;
      'sections.tab-content-main-section': SectionsTabContentMainSection;
    }
  }
}
