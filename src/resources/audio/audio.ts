// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '../../resource';
import { Transcriptions } from './transcriptions';
import { Translations } from './translations';
import * as API from './index';

export class Audio extends APIResource {
  transcriptions: Transcriptions = new Transcriptions(this.client);
  translations: Translations = new Translations(this.client);
}

export namespace Audio {
  export import Transcriptions = API.Transcriptions;
  export import Transcription = API.Transcription;
  export import TranscriptionCreateParams = API.TranscriptionCreateParams;

  export import Translations = API.Translations;
  export import Translation = API.Translation;
  export import TranslationCreateParams = API.TranslationCreateParams;
}
