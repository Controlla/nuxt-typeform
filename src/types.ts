export interface TypeformOptions {
  /**
   * Your Algolia application ID.
   *
   * {@link https://docsearch.algolia.com/docs/api#appid}
   */
  applicationId?: string;
  /**
   * Your Algolia Search API key.
   *
   * {@link https://docsearch.algolia.com/docs/api#apikey}
   */
  apiKey?: string;
  /**
   * The language to prefix all your facetFilters with.
   * This will be overwritten if you add `facetFilters` into your `searchOptions` object.
   * This is local shorthand and provided by @nuxtjs/algolia.
   */
  langAttribute?: string;
  /**
   * Default language to be used on the Algolia DocSearch client.
   *
   * @default 'en'
   */
  lang?: string;
  /**
   * Default language to be used on the Algolia DocSearch client.
   *
   * @default 'en'
   */
  hideHeaders?: boolean;
  hideFooter?: boolean;
  opacity?: number;
  buttonText?: string;
  onSubmit?: (formData: any) => void;
}
