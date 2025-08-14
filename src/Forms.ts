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
  AiplanReqAnswer,
  AiplanReqForm,
  AiplanRespAnswers,
  DaoPaginationResponse,
  DtoAttachment,
  DtoForm,
  DtoFormAnswer,
  DtoFormLight,
  ErrdefsDefinedError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Forms<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Получает информацию о форме, требующей аутентификации для ответов.
   *
   * @tags Forms
   * @name GetFormAuth
   * @summary формы: получить форму (аутентификация)
   * @request GET:/api/auth/forms/{formSlug}/
   * @secure
   */
  getFormAuth = (formSlug: string, params: RequestParams = {}) =>
    this.request<DtoForm, ErrdefsDefinedError>({
      path: `/api/auth/forms/${formSlug}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Отправляет ответ на форму, требующую аутентификации.
   *
   * @tags Forms
   * @name CreateAnswerAuth
   * @summary ответы: Отправить ответ (аутентифицированный)
   * @request POST:/api/auth/forms/{formSlug}/answer/
   * @secure
   */
  createAnswerAuth = (
    formSlug: string,
    answer: AiplanReqAnswer[],
    params: RequestParams = {},
  ) =>
    this.request<AiplanRespAnswers, ErrdefsDefinedError>({
      path: `/api/auth/forms/${formSlug}/answer/`,
      method: "POST",
      body: answer,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Загружает новое вложение в ответ формы
   *
   * @tags Forms
   * @name CreateFormAttachments
   * @summary вложения: загрузка вложения в ответ формы
   * @request POST:/api/auth/forms/{formSlug}/form-attachments/
   * @secure
   */
  createFormAttachments = (
    workspaceSlug: string,
    formSlug: string,
    data: {
      /** Файл для загрузки */
      asset: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoAttachment, ErrdefsDefinedError>({
      path: `/api/auth/forms/${formSlug}/form-attachments/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список форм для указанного рабочего пространства.
   *
   * @tags Forms
   * @name GetFormList
   * @summary формы: список по пространству
   * @request GET:/api/auth/workspaces/{workspaceSlug}/forms/
   * @secure
   */
  getFormList = (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<DtoFormLight[], ErrdefsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/forms/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Создает новую форму в рабочем пространстве.
   *
   * @tags Forms
   * @name CreateForm
   * @summary формы: создать форму
   * @request POST:/api/auth/workspaces/{workspaceSlug}/forms/
   * @secure
   */
  createForm = (
    workspaceSlug: string,
    form: AiplanReqForm,
    params: RequestParams = {},
  ) =>
    this.request<DtoForm, ErrdefsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/forms/`,
      method: "POST",
      body: form,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет форму в рабочем пространстве.
   *
   * @tags Forms
   * @name DeleteForm
   * @summary формы: удалить форму
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/forms/{formSlug}/
   * @secure
   */
  deleteForm = (
    workspaceSlug: string,
    formSlug: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/forms/${formSlug}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Обновляет данные формы.
   *
   * @tags Forms
   * @name UpdateForm
   * @summary формы: обновить форму
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/forms/{formSlug}/
   * @secure
   */
  updateForm = (
    workspaceSlug: string,
    formSlug: string,
    form: AiplanReqForm,
    params: RequestParams = {},
  ) =>
    this.request<DtoForm, ErrdefsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/forms/${formSlug}/`,
      method: "PATCH",
      body: form,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список всех ответов на указанную форму.
   *
   * @tags Forms
   * @name GetAnswers
   * @summary ответы: Получить ответы
   * @request GET:/api/auth/workspaces/{workspaceSlug}/forms/{formSlug}/answers/
   * @secure
   */
  getAnswers = (
    workspaceSlug: string,
    formSlug: string,
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Количество результатов на странице
       * @default 100
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      (DaoPaginationResponse & {
        result?: DtoFormAnswer[];
      })[],
      ErrdefsDefinedError
    >({
      path: `/api/auth/workspaces/${workspaceSlug}/forms/${formSlug}/answers/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает информацию о конкретном ответе по ID.
   *
   * @tags Forms
   * @name GetAnswer
   * @summary ответы: Получить ответ
   * @request GET:/api/auth/workspaces/{workspaceSlug}/forms/{formSlug}/answers/{answerSeq}/
   * @secure
   */
  getAnswer = (
    workspaceSlug: string,
    formSlug: string,
    answerSeq: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoFormAnswer, ErrdefsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/forms/${formSlug}/answers/${answerSeq}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Получает информацию о форме, без аутентификации
   *
   * @tags Forms
   * @name GetFormNoAuth
   * @summary формы: получить форму
   * @request GET:/api/forms/{formSlug}/
   */
  getFormNoAuth = (formSlug: string, params: RequestParams = {}) =>
    this.request<DtoForm, ErrdefsDefinedError>({
      path: `/api/forms/${formSlug}/`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Отправляет ответ на форму.
   *
   * @tags Forms
   * @name CreateAnswerNoAuth
   * @summary ответы: Отправить ответ
   * @request POST:/api/forms/{formSlug}/answer/
   */
  createAnswerNoAuth = (
    formSlug: string,
    answer: AiplanReqAnswer[],
    params: RequestParams = {},
  ) =>
    this.request<AiplanRespAnswers, ErrdefsDefinedError>({
      path: `/api/forms/${formSlug}/answer/`,
      method: "POST",
      body: answer,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
