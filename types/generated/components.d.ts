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

export interface ComponentsOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_components_order_items';
  info: {
    displayName: 'OrderItem';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsOrderTitle extends Struct.ComponentSchema {
  collectionName: 'components_components_order_titles';
  info: {
    displayName: 'OrderTitle';
  };
  attributes: {
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsYaizyInfoItem extends Struct.ComponentSchema {
  collectionName: 'components_components_yaizy_info_items';
  info: {
    displayName: 'yaizy_info_item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface SectionsAboutDepartmentCenter extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_department_centers';
  info: {
    displayName: 'about_department_center';
  };
  attributes: {
    desc: Schema.Attribute.Text;
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

export interface SectionsCenterTitleOrderItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_center_title_order_items';
  info: {
    displayName: 'CenterTitleOrderItems';
  };
  attributes: {
    order_items: Schema.Attribute.Component<'components.order-title', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCentersOfDepartment extends Struct.ComponentSchema {
  collectionName: 'components_sections_centers_of_departments';
  info: {
    displayName: 'centers-of-department';
  };
  attributes: {
    center_departments: Schema.Attribute.Relation<
      'oneToMany',
      'api::center-department.center-department'
    >;
  };
}

export interface SectionsCreditAnalysis extends Struct.ComponentSchema {
  collectionName: 'components_sections_credit_analyses';
  info: {
    displayName: 'CreditAnalysis';
  };
  attributes: {
    financeDesc: Schema.Attribute.String;
    productDesc: Schema.Attribute.String;
    riskManagementDesc: Schema.Attribute.String;
    underwritingDesc: Schema.Attribute.String;
  };
}

export interface SectionsFintechItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_fintech_items';
  info: {
    displayName: 'FintechItem';
  };
  attributes: {
    innerTitleOne: Schema.Attribute.String;
    innerTitleThree: Schema.Attribute.String;
    innerTitleThreeBold: Schema.Attribute.String;
    innerTitleThreeGrey: Schema.Attribute.String;
    innerTitleTwo: Schema.Attribute.String;
    innerTitleTwoBold: Schema.Attribute.String;
    innerTitleTwoGrey: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsFintechSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_fintech_sections';
  info: {
    displayName: 'fintechSection';
  };
  attributes: {
    fintechSection: Schema.Attribute.Component<'sections.fintech-item', false>;
  };
}

export interface SectionsLabItemSingleInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_lab_item_single_infos';
  info: {
    displayName: 'lab-item-single-info';
  };
  attributes: {
    careers: Schema.Attribute.Component<'components.about-desc-item', true>;
    focus_title: Schema.Attribute.Text;
    main_section_desc: Schema.Attribute.String;
    main_section_title: Schema.Attribute.String;
    skills: Schema.Attribute.Component<'components.about-desc-item', true>;
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

export interface SectionsMasterdDegreeOfCenter extends Struct.ComponentSchema {
  collectionName: 'components_sections_masterd_degree_of_centers';
  info: {
    displayName: 'masters_degree_of_center';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMissionProductInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_mission_product_infos';
  info: {
    displayName: 'MissionProductInfo';
  };
  attributes: {
    durationOfTraining: Schema.Attribute.Text;
    missionDesc: Schema.Attribute.Text;
    problem: Schema.Attribute.Text;
    productDesc: Schema.Attribute.Text;
    sectionTitle: Schema.Attribute.String;
    solution: Schema.Attribute.Text;
    targetAudience: Schema.Attribute.Text;
  };
}

export interface SectionsSchoolMainSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_school_main_sections';
  info: {
    displayName: 'SchoolMainSection';
  };
  attributes: {
    desc: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSchoolOfTab extends Struct.ComponentSchema {
  collectionName: 'components_sections_school_of_tabs';
  info: {
    displayName: 'school-of-tab';
  };
  attributes: {
    schools: Schema.Attribute.Relation<'oneToMany', 'api::school.school'>;
  };
}

export interface SectionsSchoolsOfYaizy extends Struct.ComponentSchema {
  collectionName: 'components_sections_schools_of_yaizies';
  info: {
    displayName: 'schools_of_yaizy';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headline_title: Schema.Attribute.String;
    info_items: Schema.Attribute.Component<'components.yaizy-info-item', true>;
    title: Schema.Attribute.String;
    yayzy_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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

export interface SectionsTitleIconedItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_title_iconed_items';
  info: {
    displayName: 'QuantitativeRiskManagement';
  };
  attributes: {
    financeDesc: Schema.Attribute.String;
    projectDesc: Schema.Attribute.String;
    quantitativeModeling: Schema.Attribute.String;
    riskManagementDesc: Schema.Attribute.String;
  };
}

export interface SectionsTitleOrderedBigItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_title_ordered_big_items';
  info: {
    displayName: 'TitleOrderedBigItems';
  };
  attributes: {
    items: Schema.Attribute.Component<'components.order-item', true>;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsTitleOrderedItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_title_ordered_items';
  info: {
    displayName: 'TitleOrderedItems';
  };
  attributes: {
    items: Schema.Attribute.Component<'components.approach-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTitleUnorderedItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_title_unordered_items';
  info: {
    displayName: 'TitleUnorderedItems';
  };
  attributes: {
    items: Schema.Attribute.Component<'components.activity-item', true>;
    sectionTitle: Schema.Attribute.String;
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
      'components.order-item': ComponentsOrderItem;
      'components.order-title': ComponentsOrderTitle;
      'components.yaizy-info-item': ComponentsYaizyInfoItem;
      'sections.about-department': SectionsAboutDepartment;
      'sections.about-department-center': SectionsAboutDepartmentCenter;
      'sections.about-section': SectionsAboutSection;
      'sections.center-title-order-items': SectionsCenterTitleOrderItems;
      'sections.centers-of-department': SectionsCentersOfDepartment;
      'sections.credit-analysis': SectionsCreditAnalysis;
      'sections.fintech-item': SectionsFintechItem;
      'sections.fintech-section': SectionsFintechSection;
      'sections.lab-item-single-info': SectionsLabItemSingleInfo;
      'sections.main-areas-activity': SectionsMainAreasActivity;
      'sections.main-news': SectionsMainNews;
      'sections.masterd-degree-of-center': SectionsMasterdDegreeOfCenter;
      'sections.mission-product-info': SectionsMissionProductInfo;
      'sections.school-main-section': SectionsSchoolMainSection;
      'sections.school-of-tab': SectionsSchoolOfTab;
      'sections.schools-of-yaizy': SectionsSchoolsOfYaizy;
      'sections.sections': SectionsSections;
      'sections.tab-content-main-section': SectionsTabContentMainSection;
      'sections.temp': SectionsTemp;
      'sections.title-iconed-items': SectionsTitleIconedItems;
      'sections.title-ordered-big-items': SectionsTitleOrderedBigItems;
      'sections.title-ordered-items': SectionsTitleOrderedItems;
      'sections.title-unordered-items': SectionsTitleUnorderedItems;
    }
  }
}
