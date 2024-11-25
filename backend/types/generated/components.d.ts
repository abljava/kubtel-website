import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ComponentsTel extends Struct.ComponentSchema {
  collectionName: 'components_components_tels';
  info: {
    displayName: 'Tel';
  };
  attributes: {
    heading: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface ComponentsSlider extends Struct.ComponentSchema {
  collectionName: 'components_components_sliders';
  info: {
    displayName: 'Slide';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    contentText: Schema.Attribute.Text;
    contentButton: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageSmall: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String;
    text: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsDevice extends Struct.ComponentSchema {
  collectionName: 'components_components_devices';
  info: {
    displayName: 'Device';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    model: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    features: Schema.Attribute.Component<'components.feature', true>;
    price: Schema.Attribute.Integer;
  };
}

export interface LayoutSlider extends Struct.ComponentSchema {
  collectionName: 'components_layout_sliders';
  info: {
    displayName: 'Slider';
    description: '';
  };
  attributes: {
    slide: Schema.Attribute.Component<'components.slider', true>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Component<'components.link', false>;
    navLink: Schema.Attribute.Component<'components.link', true>;
    orderBtn: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    footerLinks: Schema.Attribute.Component<'layout.footer-links', true>;
    tel: Schema.Attribute.String;
    agreement: Schema.Attribute.Text;
  };
}

export interface LayoutFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_links';
  info: {
    displayName: 'Footer Links';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    links: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface LayoutDevicesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_devices_sections';
  info: {
    displayName: 'Devices Section';
    description: '';
  };
  attributes: {};
}

export interface LayoutDevicesBlock extends Struct.ComponentSchema {
  collectionName: 'components_layout_devices_blocks';
  info: {
    displayName: 'Devices Block';
  };
  attributes: {
    devices: Schema.Attribute.Component<'components.device', true>;
  };
}

export interface LayoutContactsInfo extends Struct.ComponentSchema {
  collectionName: 'components_layout_contacts_infos';
  info: {
    displayName: 'Contact Info';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    city: Schema.Attribute.String;
    address: Schema.Attribute.Text;
    tel: Schema.Attribute.Component<'components.tel', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'components.tel': ComponentsTel;
      'components.slider': ComponentsSlider;
      'components.link': ComponentsLink;
      'components.feature': ComponentsFeature;
      'components.device': ComponentsDevice;
      'layout.slider': LayoutSlider;
      'layout.hero-section': LayoutHeroSection;
      'layout.header': LayoutHeader;
      'layout.footer': LayoutFooter;
      'layout.footer-links': LayoutFooterLinks;
      'layout.devices-section': LayoutDevicesSection;
      'layout.devices-block': LayoutDevicesBlock;
      'layout.contacts-info': LayoutContactsInfo;
    }
  }
}
