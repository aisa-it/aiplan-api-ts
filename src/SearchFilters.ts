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
  DaoPaginationResponse,
  DtoSearchFilterFull,
  DtoSearchFilterLight,
  ErrdefsDefinedError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SearchFilters<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает список доступных фильтров поиска с возможностью пагинации и поиска по имени
   *
   * @tags Search Filters
   * @name GetSearchFilterList
   * @summary Фильтры: получение списка доступных фильтров поиска
   * @request GET:/api/auth/filters/
   * @secure
   */
  getSearchFilterList = (
    query?: {
      /**
       * Смещение для пагинации
       * @default -1
       */
      offset?: number;
      /**
       * Лимит результатов
       * @default 100
       */
      limit?: number;
      /** Строка поиска по имени фильтра */
      search_query?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoSearchFilterLight[];
      },
      ErrdefsDefinedError
    >({
      path: `/api/auth/filters/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Создает новый фильтр поиска для текущего пользователя
   *
   * @tags Search Filters
   * @name CreateSearchFilter
   * @summary Фильтры: создание нового фильтра поиска
   * @request POST:/api/auth/filters/
   * @secure
   */
  createSearchFilter = (
    data: DtoSearchFilterLight,
    params: RequestParams = {},
  ) =>
    this.request<DtoSearchFilterFull, ErrdefsDefinedError>({
      path: `/api/auth/filters/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает данные фильтра поиска по его ID
   *
   * @tags Search Filters
   * @name GetSearchFilter
   * @summary Фильтры: получение фильтра поиска
   * @request GET:/api/auth/filters/{filterId}/
   * @secure
   */
  getSearchFilter = (filterId: string, params: RequestParams = {}) =>
    this.request<DtoSearchFilterFull, ErrdefsDefinedError>({
      path: `/api/auth/filters/${filterId}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет фильтр поиска по его ID для текущего пользователя или суперпользователя
   *
   * @tags Search Filters
   * @name DeleteSearchFilter
   * @summary Фильтры: удаление фильтра поиска
   * @request DELETE:/api/auth/filters/{filterId}/
   * @secure
   */
  deleteSearchFilter = (filterId: string, params: RequestParams = {}) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/filters/${filterId}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Обновляет фильтр поиска по его ID для текущего пользователя
   *
   * @tags Search Filters
   * @name UpdateSearchFilter
   * @summary Фильтры: обновление фильтра поиска
   * @request PATCH:/api/auth/filters/{filterId}/
   * @secure
   */
  updateSearchFilter = (
    filterId: string,
    data: DtoSearchFilterLight,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/filters/${filterId}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает список фильтров поиска, созданных текущим пользователем
   *
   * @tags Search Filters
   * @name GetMySearchFilterList
   * @summary Фильтры: получение фильтров поиска текущего пользователя
   * @request GET:/api/auth/users/me/filters/
   * @secure
   */
  getMySearchFilterList = (params: RequestParams = {}) =>
    this.request<DtoSearchFilterFull[], ErrdefsDefinedError>({
      path: `/api/auth/users/me/filters/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Добавляет указанный фильтр поиска в список доступных фильтров текущего пользователя
   *
   * @tags Search Filters
   * @name AddSearchFilterToMe
   * @summary Фильтры: добавление фильтра поиска в список текущего пользователя
   * @request POST:/api/auth/users/me/filters/{filterId}/
   * @secure
   */
  addSearchFilterToMe = (filterId: string, params: RequestParams = {}) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/users/me/filters/${filterId}/`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description Удаляет указанный фильтр поиска из списка доступных фильтров текущего пользователя
   *
   * @tags Search Filters
   * @name DeleteSearchFilterFromMe
   * @summary Фильтры: удаление фильтра поиска из списка текущего пользователя
   * @request DELETE:/api/auth/users/me/filters/{filterId}/
   * @secure
   */
  deleteSearchFilterFromMe = (filterId: string, params: RequestParams = {}) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/users/me/filters/${filterId}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
