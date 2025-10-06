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

import { ApierrorsDefinedError, DtoReleaseNoteLight } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ReleaseNotes<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает информацию о примечании к релизу по ID
   *
   * @tags ReleaseNotes
   * @name GetReleaseNote
   * @summary Релизы: получение примечания к релизу
   * @request GET:/api/auth/admin/release-notes/{noteId}
   * @secure
   */
  getReleaseNote = (noteId: string, params: RequestParams = {}) =>
    this.request<DtoReleaseNoteLight, ApierrorsDefinedError>({
      path: `/api/auth/admin/release-notes/${noteId}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список обновлений
   *
   * @tags ReleaseNotes
   * @name GetProductUpdateList
   * @summary Релизы: получение списка обновлений
   * @request GET:/api/auth/release-notes/
   * @secure
   */
  getProductUpdateList = (params: RequestParams = {}) =>
    this.request<DtoReleaseNoteLight[], ApierrorsDefinedError>({
      path: `/api/auth/release-notes/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает информацию о примечаниях к релизу
   *
   * @tags ReleaseNotes
   * @name GetRecentReleaseNoteList
   * @summary Релизы: получение примечаний к релизу начиная с указанной версии
   * @request GET:/api/auth/release-notes/{noteId}
   * @secure
   */
  getRecentReleaseNoteList = (noteId: string, params: RequestParams = {}) =>
    this.request<DtoReleaseNoteLight[], ApierrorsDefinedError>({
      path: `/api/auth/release-notes/${noteId}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
