/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  AiplanAddDocToFavoritesRequest,
  AiplanDefinedError,
  AiplanReactionRequest,
  DaoPaginationResponse,
  DtoAttachment,
  DtoCommentReaction,
  DtoDoc,
  DtoDocComment,
  DtoDocFavorites,
  DtoDocLight,
  DtoEntityActivityFull,
  DtoHistoryBody,
  DtoHistoryBodyLight,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Docs<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Удаляет указанное вложение, прикрепленное к документу
   *
   * @tags Docs
   * @name DeleteFormAttachment
   * @summary Doc (вложения): удаление вложения из документа
   * @request DELETE:/api/auth/forms/{formSlug}/form-attachments/{attachmentId}
   * @secure
   */
  deleteFormAttachment = (
    workspaceSlug: string,
    formSlug: string,
    attachmentId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, AiplanDefinedError>({
      path: `/api/auth/forms/${formSlug}/form-attachments/${attachmentId}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает список коневых документов
   *
   * @tags Docs
   * @name GetRootDocList
   * @summary doc: получение всех корневых документов
   * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/
   * @secure
   */
  getRootDocList = (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<DtoDocLight[], AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description добавление корневого документа
   *
   * @tags Docs
   * @name CreateRootDoc
   * @summary doc: добавление корневого документа
   * @request POST:/api/auth/workspaces/{workspaceSlug}/doc/
   * @secure
   */
  createRootDoc = (
    workspaceSlug: string,
    data: {
      /**
       * документ в формате JSON
       * @example "{"title": "title text", "content": "<p>HTML-контент</p>", "reader_role": 5, "editor_role":10, "seq_id": 0, "draft": false}"
       */
      doc: string;
      /** Вложения для документа */
      files?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoDoc, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description получение документа
   *
   * @tags Docs
   * @name GetDoc
   * @summary doc: получение документа
   * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/
   * @secure
   */
  getDoc = (workspaceSlug: string, docId: string, params: RequestParams = {}) =>
    this.request<DtoDoc, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description добавление документа
   *
   * @tags Docs
   * @name CreateDoc
   * @summary doc: добавление документа
   * @request POST:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/
   * @secure
   */
  createDoc = (
    workspaceSlug: string,
    docId: string,
    data: {
      /**
       * документ в формате JSON
       * @example "{"title": "title text", "content": "<p>HTML-контент</p>", "reader_role": 5, "editor_role":10, "seq_id": 0, "draft": false}"
       */
      doc: string;
      /** Вложения для документа */
      files?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoDoc, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description удаление документа
   *
   * @tags Docs
   * @name DeleteDoc
   * @summary doc: удаление документа
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/
   * @secure
   */
  deleteDoc = (
    workspaceSlug: string,
    docId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description изменение документа
   *
   * @tags Docs
   * @name UpdateDoc
   * @summary doc: изменение документа
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/
   * @secure
   */
  updateDoc = (
    workspaceSlug: string,
    docId: string,
    data: {
      /**
       * документ в формате JSON
       * @example "{"title": "title text", "content": "<p>HTML-контент</p>", "reader_role": 5, "editor_role":10, "seq_id": 0, "draft": false}"
       */
      doc: string;
      /** Вложения для документа */
      files?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoDoc, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает активность по документу
   *
   * @tags Docs
   * @name GetDocActivityList
   * @summary Doc: получение активности по документу
   * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/activities/
   * @secure
   */
  getDocActivityList = (
    workspaceSlug: string,
    docId: string,
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Лимит записей
       * @default 100
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoEntityActivityFull[];
      },
      AiplanDefinedError
    >({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/activities/`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает все дочерние документы
   *
   * @tags Docs
   * @name GetChildDocList
   * @summary doc: получение все дочерние документы
   * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/child/
   * @secure
   */
  getChildDocList = (
    workspaceSlug: string,
    docId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoDocLight[], AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/child/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description комментарии документа
   *
   * @tags Docs
   * @name GetDocCommentList
   * @summary doc: комментарии документа
   * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/
   * @secure
   */
  getDocCommentList = (
    workspaceSlug: string,
    docId: string,
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Лимит записей
       * @default 100
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoDocComment[];
      },
      AiplanDefinedError
    >({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description создание комментария
   *
   * @tags Docs
   * @name CreateDocComment
   * @summary doc: создание комментария
   * @request POST:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/
   * @secure
   */
  createDocComment = (
    workspaceSlug: string,
    docId: string,
    data: {
      /**
       * комментарий в формате JSON
       * @example "{"comment_html": "<p>HTML-контент</p>", "reply_to_comment_id": null}"
       */
      comment: string;
      /** Вложения для документа */
      files?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoDocComment, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Получает данные комментария
   *
   * @tags Docs
   * @name GetDocComment
   * @summary doc: получение комментария
   * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/{commentId}/
   * @secure
   */
  getDocComment = (
    workspaceSlug: string,
    docId: string,
    commentId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoDocComment, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/${commentId}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description удаление комментария
   *
   * @tags Docs
   * @name DeleteDocComment
   * @summary doc: удаление комментария
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/{commentId}/
   * @secure
   */
  deleteDocComment = (
    workspaceSlug: string,
    docId: string,
    commentId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/${commentId}/`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description обновление комментария
   *
   * @tags Docs
   * @name UpdateDocComment
   * @summary doc: обновление комментария
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/{commentId}/
   * @secure
   */
  updateDocComment = (
    workspaceSlug: string,
    docId: string,
    commentId: string,
    data: {
      /**
       * комментарий в формате JSON
       * @example "{"comment_html": "<p>HTML-контент</p>", "reply_to_comment_id": null}"
       */
      comment: string;
      /** Вложения для документа */
      files?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoDocComment, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/${commentId}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description добавление реакции
   *
   * @tags Docs
   * @name AddDocCommentReaction
   * @summary doc: добавление реакции
   * @request POST:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/{commentId}/reactions/
   * @secure
   */
  addDocCommentReaction = (
    workspaceSlug: string,
    docId: string,
    commentId: string,
    data: AiplanReactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoCommentReaction, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/${commentId}/reactions/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description удаление реакции
   *
   * @tags Docs
   * @name RemoveDocCommentReaction
   * @summary doc: удаление реакции
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/{commentId}/reactions/{reaction}/
   * @secure
   */
  removeDocCommentReaction = (
    workspaceSlug: string,
    docId: string,
    commentId: string,
    reaction: string,
    params: RequestParams = {},
  ) =>
    this.request<void, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/${commentId}/reactions/${reaction}/`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает список всех вложений, прикрепленных к документу
   *
   * @tags Docs
   * @name GetDocAttachmentList
   * @summary Doc (вложения): получение вложений документа
   * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/doc-attachments/
   * @secure
   */
  getDocAttachmentList = (
    workspaceSlug: string,
    docId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoAttachment[], AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/doc-attachments/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Загружает новое вложение и прикрепляет его к документу
   *
   * @tags Docs
   * @name CreateDocAttachments
   * @summary Doc (вложения): загрузка вложения в документ
   * @request POST:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/doc-attachments/
   * @secure
   */
  createDocAttachments = (
    workspaceSlug: string,
    docId: string,
    data: {
      /** Файл для загрузки */
      asset: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoAttachment, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/doc-attachments/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет указанное вложение, прикрепленное к документу
   *
   * @tags Docs
   * @name DeleteDocAttachment
   * @summary Doc (вложения): удаление вложения из документа
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/doc-attachments/{attachmentId}
   * @secure
   */
  deleteDocAttachment = (
    workspaceSlug: string,
    docId: string,
    attachmentId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/doc-attachments/${attachmentId}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает истории изменений  по документу
   *
   * @tags Docs
   * @name GetDocHistoryList
   * @summary Doc: получение истории изменений по документу
   * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/history/
   * @secure
   */
  getDocHistoryList = (
    workspaceSlug: string,
    docId: string,
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Лимит записей
       * @default 100
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoHistoryBodyLight[];
      },
      AiplanDefinedError
    >({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/history/`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает старую версию по документу
   *
   * @tags Docs
   * @name GetDocHistory
   * @summary Doc: получение старой версии по документу
   * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/history/{versionId}
   * @secure
   */
  getDocHistory = (
    workspaceSlug: string,
    docId: string,
    versionId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoHistoryBody, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/history/${versionId}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Откатывает старую версию документа
   *
   * @tags Docs
   * @name UpdateDocFromHistory
   * @summary Doc: Откат старой версии документа
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/history/{versionId}
   * @secure
   */
  updateDocFromHistory = (
    workspaceSlug: string,
    docId: string,
    versionId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/history/${versionId}`,
      method: "PATCH",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description перенос документа
   *
   * @tags Docs
   * @name MoveDoc
   * @summary doc: перенос документа
   * @request POST:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/move/
   * @secure
   */
  moveDoc = (
    workspaceSlug: string,
    docId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/move/`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает список избранных документов текущего пользователя в рабочем пространстве.
   *
   * @tags Docs
   * @name GetFavoriteDocList
   * @summary Doc (Favorites): получение списка избранных документов
   * @request GET:/api/auth/workspaces/{workspaceSlug}/user-favorite-docs/
   * @secure
   */
  getFavoriteDocList = (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<DtoDocFavorites[], AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/user-favorite-docs/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Добавляет указанный документ в список избранных текущего пользователя в рабочем пространстве.
   *
   * @tags Docs
   * @name AddDocToFavorites
   * @summary Doc (Favorites): добавление документа в избранное
   * @request POST:/api/auth/workspaces/{workspaceSlug}/user-favorite-docs/
   * @secure
   */
  addDocToFavorites = (
    workspaceSlug: string,
    project: AiplanAddDocToFavoritesRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoDocFavorites, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/user-favorite-docs/`,
      method: "POST",
      body: project,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет указанный документ из списка избранных текущего пользователя в рабочем пространстве.
   *
   * @tags Docs
   * @name RemoveDocFromFavorites
   * @summary Doc (Favorites): удаление документа из избранных
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/user-favorite-docs/{docId}
   * @secure
   */
  removeDocFromFavorites = (
    workspaceSlug: string,
    docId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, AiplanDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/user-favorite-docs/${docId}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
