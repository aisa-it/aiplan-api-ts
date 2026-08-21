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
  ApierrorsDefinedError,
  DaoPaginationResponse,
  DtoCreateDictionaryRequest,
  DtoCreateDictionaryRowRequest,
  DtoDictionary,
  DtoDictionaryRow,
  DtoImportDictionaryRowsRequest,
  DtoImportDictionaryRowsResult,
  DtoUpdateDictionaryRequest,
  DtoUpdateDictionaryRowRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Dictionaries<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает все справочники проекта с количеством строк в каждом.
   *
   * @tags Dictionaries
   * @name GetDictionaryList
   * @summary Справочники: получение списка справочников проекта
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/dictionaries/
   * @secure
   */
  getDictionaryList = (
    workspaceSlug: string,
    projectId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoDictionary[], ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/dictionaries/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Создает новый справочник проекта. Доступно только для админов проекта.
   *
   * @tags Dictionaries
   * @name CreateDictionary
   * @summary Справочники: создание справочника
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/dictionaries/
   * @secure
   */
  createDictionary = (
    workspaceSlug: string,
    projectId: string,
    request: DtoCreateDictionaryRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoDictionary, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/dictionaries/`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет справочник проекта вместе со строками. Справочник, на который ссылаются шаблоны полей, удалить нельзя. Доступно только для админов проекта.
   *
   * @tags Dictionaries
   * @name DeleteDictionary
   * @summary Справочники: удаление справочника
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/dictionaries/{dictionaryId}/
   * @secure
   */
  deleteDictionary = (
    workspaceSlug: string,
    projectId: string,
    dictionaryId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/dictionaries/${dictionaryId}/`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Обновляет справочник проекта. Доступно только для админов проекта.
   *
   * @tags Dictionaries
   * @name UpdateDictionary
   * @summary Справочники: обновление справочника
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/dictionaries/{dictionaryId}/
   * @secure
   */
  updateDictionary = (
    workspaceSlug: string,
    projectId: string,
    dictionaryId: string,
    request: DtoUpdateDictionaryRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoDictionary, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/dictionaries/${dictionaryId}/`,
      method: "PATCH",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает строки справочника с пагинацией и поиском по отображаемому значению. Архивные строки по умолчанию не возвращаются.
   *
   * @tags Dictionaries
   * @name GetDictionaryRows
   * @summary Справочники: получение строк справочника
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/dictionaries/{dictionaryId}/rows/
   * @secure
   */
  getDictionaryRows = (
    workspaceSlug: string,
    projectId: string,
    dictionaryId: string,
    query?: {
      /** Смещение (по умолчанию 0) */
      offset?: number;
      /** Количество строк (по умолчанию 100, максимум 1000) */
      limit?: number;
      /** Поиск по отображаемому значению */
      search_query?: string;
      /** Включить архивные строки (по умолчанию false) */
      include_archived?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoDictionaryRow[];
      },
      ApierrorsDefinedError
    >({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/dictionaries/${dictionaryId}/rows/`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Добавляет строку в справочник. Доступно только для админов проекта.
   *
   * @tags Dictionaries
   * @name CreateDictionaryRow
   * @summary Справочники: создание строки справочника
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/dictionaries/{dictionaryId}/rows/
   * @secure
   */
  createDictionaryRow = (
    workspaceSlug: string,
    projectId: string,
    dictionaryId: string,
    request: DtoCreateDictionaryRowRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoDictionaryRow, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/dictionaries/${dictionaryId}/rows/`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Импортирует строки справочника одним запросом (до 10000 строк). При replace=true существующие строки без ссылок из задач удаляются, строки со ссылками архивируются. Доступно только для админов проекта.
   *
   * @tags Dictionaries
   * @name ImportDictionaryRows
   * @summary Справочники: батч-импорт строк
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/dictionaries/{dictionaryId}/rows/import/
   * @secure
   */
  importDictionaryRows = (
    workspaceSlug: string,
    projectId: string,
    dictionaryId: string,
    request: DtoImportDictionaryRowsRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoImportDictionaryRowsResult, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/dictionaries/${dictionaryId}/rows/import/`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет строку справочника. Строку, на которую ссылаются значения в задачах, удалить нельзя — её следует заархивировать. Доступно только для админов проекта.
   *
   * @tags Dictionaries
   * @name DeleteDictionaryRow
   * @summary Справочники: удаление строки справочника
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/dictionaries/{dictionaryId}/rows/{rowId}/
   * @secure
   */
  deleteDictionaryRow = (
    workspaceSlug: string,
    projectId: string,
    dictionaryId: string,
    rowId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/dictionaries/${dictionaryId}/rows/${rowId}/`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Обновляет отображаемое значение, атрибуты или признак архивности строки. Доступно только для админов проекта.
   *
   * @tags Dictionaries
   * @name UpdateDictionaryRow
   * @summary Справочники: обновление строки справочника
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/dictionaries/{dictionaryId}/rows/{rowId}/
   * @secure
   */
  updateDictionaryRow = (
    workspaceSlug: string,
    projectId: string,
    dictionaryId: string,
    rowId: string,
    request: DtoUpdateDictionaryRowRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoDictionaryRow, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/dictionaries/${dictionaryId}/rows/${rowId}/`,
      method: "PATCH",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
