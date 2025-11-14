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
  DtoCreateGitRepositoryRequest,
  DtoCreateGitRepositoryResponse,
  DtoDeleteGitRepositoryRequest,
  DtoGitConfigInfo,
  DtoListGitRepositoriesResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Git<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает информацию о состоянии Git конфигурации системы
   *
   * @tags GIT
   * @name AuthGitConfigList
   * @summary Конфигурация: получение Git настроек
   * @request GET:/api/auth/git/config/
   * @secure
   */
  authGitConfigList = (params: RequestParams = {}) =>
    this.request<DtoGitConfigInfo, ApierrorsDefinedError>({
      path: `/api/auth/git/config/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список всех Git репозиториев в указанном workspace
   *
   * @tags GIT
   * @name AuthGitRepositoriesList
   * @summary Репозиторий: список Git репозиториев
   * @request GET:/api/auth/git/{workspaceSlug}/repositories/
   * @secure
   */
  authGitRepositoriesList = (
    workspaceSlug: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoListGitRepositoriesResponse, ApierrorsDefinedError>({
      path: `/api/auth/git/${workspaceSlug}/repositories/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Создает новый bare Git репозиторий в указанном рабочем пространстве. Метаданные хранятся в файловой системе.
   *
   * @tags GIT
   * @name AuthGitRepositoriesCreate
   * @summary Репозиторий: создание Git репозитория
   * @request POST:/api/auth/git/{workspaceSlug}/repositories/
   * @secure
   */
  authGitRepositoriesCreate = (
    workspaceSlug: string,
    request: DtoCreateGitRepositoryRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoCreateGitRepositoryResponse, ApierrorsDefinedError>({
      path: `/api/auth/git/${workspaceSlug}/repositories/`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет Git репозиторий из файловой системы. Требуется роль администратора workspace.
   *
   * @tags GIT
   * @name AuthGitRepositoriesDelete
   * @summary Репозиторий: удаление Git репозитория
   * @request DELETE:/api/auth/git/{workspaceSlug}/repositories/
   * @secure
   */
  authGitRepositoriesDelete = (
    workspaceSlug: string,
    request: DtoDeleteGitRepositoryRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/git/${workspaceSlug}/repositories/`,
      method: "DELETE",
      body: request,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
