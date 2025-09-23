import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsAboutDescItem extends Struct.ComponentSchema {
  collectionName: 'components_components_about_desc_items';
  info: {
    displayName: 'AboutDescItem';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ComponentsAboutHistory extends Struct.ComponentSchema {
  collectionName: 'components_components_about_histories';
  info: {
    displayName: 'about-history';
  };
  attributes: {
    year: Schema.Attribute.String;
    yearDesc: Schema.Attribute.Text;
  };
}

export interface ComponentsActivityItem extends Struct.ComponentSchema {
  collectionName: 'components_components_activity_items';
  info: {
    displayName: 'ActivityItem';
  };
  attributes: {
    desc: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsApproachItem extends Struct.ComponentSchema {
  collectionName: 'components_components_approach_items';
  info: {
    displayName: 'ApproachItem';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

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

export interface ComponentsMissionItem extends Struct.ComponentSchema {
  collectionName: 'components_components_mission_items';
  info: {
    displayName: 'MissionItem';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
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

export interface SectionsAboutDepartment extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_departments';
  info: {
    displayName: 'AboutDepartment';
  };
  attributes: {
    desc: Schema.Attribute.Component<'components.about-desc-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'AboutSection';
  };
  attributes: {
    tech_instruments: Schema.Attribute.Component<
      'components.activity-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutUsingAiSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_using_ai_sections';
  info: {
    displayName: 'about-using-ai-section';
  };
  attributes: {
    title: Schema.Attribute.String;
    using_ais: Schema.Attribute.Relation<'oneToMany', 'api::using-ai.using-ai'>;
  };
}

export interface SectionsMainAreasActivity extends Struct.ComponentSchema {
  collectionName: 'components_sections_main_areas_activities';
  info: {
    displayName: 'MainAreasActivity';
  };
  attributes: {
    activityItems: Schema.Attribute.Component<'components.activity-item', true>;
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

export interface SectionsTemp extends Struct.ComponentSchema {
  collectionName: 'components_sections_temps';
  info: {
    displayName: 'AboutOrderSection';
  };
  attributes: {
    about_approach: Schema.Attribute.Component<
      'components.approach-item',
      true
    >;
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.about-desc-item': ComponentsAboutDescItem;
      'components.about-history': ComponentsAboutHistory;
      'components.activity-item': ComponentsActivityItem;
      'components.approach-item': ComponentsApproachItem;
      'components.main-swiper': ComponentsMainSwiper;
      'components.mission-item': ComponentsMissionItem;
      'sections.about': SectionsAbout;
      'sections.about-department': SectionsAboutDepartment;
      'sections.about-section': SectionsAboutSection;
      'sections.about-using-ai-section': SectionsAboutUsingAiSection;
      'sections.main-areas-activity': SectionsMainAreasActivity;
      'sections.main-news': SectionsMainNews;
      'sections.sections': SectionsSections;
      'sections.tab-content-main-section': SectionsTabContentMainSection;
      'sections.temp': SectionsTemp;
    }
  }
}
