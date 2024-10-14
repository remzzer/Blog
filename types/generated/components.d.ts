import type { Schema, Attribute } from '@strapi/strapi';

export interface UiTitle extends Schema.Component {
  collectionName: 'components_ui_titles';
  info: {
    displayName: 'title';
    icon: 'layer';
  };
  attributes: {
    content: Attribute.String & Attribute.Required;
    level: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<2>;
  };
}

export interface UiText extends Schema.Component {
  collectionName: 'components_ui_texts';
  info: {
    displayName: 'text';
    icon: 'quote';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    lessWide: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ArticleTextBlock extends Schema.Component {
  collectionName: 'components_ui_text_blocks';
  info: {
    displayName: 'TextBlock';
    icon: 'code';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'ui.title'>;
    content: Attribute.Component<'ui.text'>;
  };
}

export interface ArticleHeader extends Schema.Component {
  collectionName: 'components_ui_headers';
  info: {
    displayName: 'Header';
    icon: 'alien';
    description: '';
  };
  attributes: {
    date: Attribute.Date & Attribute.Required;
    description: Attribute.Text;
    photo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    title: Attribute.Component<'ui.title'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.title': UiTitle;
      'ui.text': UiText;
      'article.text-block': ArticleTextBlock;
      'article.header': ArticleHeader;
    }
  }
}
