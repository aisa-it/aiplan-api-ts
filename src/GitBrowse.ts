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
  AiplanBlobResponseDTO,
  AiplanBranchesResponseDTO,
  AiplanCommitsResponseDTO,
  AiplanRepoInfoDTO,
  AiplanTreeResponseDTO,
  ApierrorsDefinedError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class GitBrowse<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает содержимое файла из репозитория (base64 encoded)
   *
   * @tags GIT-BROWSE
   * @name AuthGitRepositoriesBlobList
   * @summary Browse: получение содержимого файла
   * @request GET:/api/auth/git/{workspaceSlug}/repositories/{repoName}/blob
   * @secure
   */
  authGitRepositoriesBlobList = (
    workspaceSlug: string,
    repoName: string,
    query: {
      /** Ветка/тег/коммит (по умолчанию: main/master) */
      ref?: string;
      /** Путь к файлу */
      path: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<AiplanBlobResponseDTO, ApierrorsDefinedError>({
      path: `/api/auth/git/${workspaceSlug}/repositories/${repoName}/blob`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список всех веток в репозитории
   *
   * @tags GIT-BROWSE
   * @name AuthGitRepositoriesBranchesList
   * @summary Browse: список веток
   * @request GET:/api/auth/git/{workspaceSlug}/repositories/{repoName}/branches
   * @secure
   */
  authGitRepositoriesBranchesList = (
    workspaceSlug: string,
    repoName: string,
    params: RequestParams = {},
  ) =>
    this.request<AiplanBranchesResponseDTO, ApierrorsDefinedError>({
      path: `/api/auth/git/${workspaceSlug}/repositories/${repoName}/branches`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список коммитов в указанной ветке
   *
   * @tags GIT-BROWSE
   * @name AuthGitRepositoriesCommitsList
   * @summary Browse: история коммитов
   * @request GET:/api/auth/git/{workspaceSlug}/repositories/{repoName}/commits
   * @secure
   */
  authGitRepositoriesCommitsList = (
    workspaceSlug: string,
    repoName: string,
    query?: {
      /** Ветка/тег (по умолчанию: main/master) */
      ref?: string;
      /** Лимит коммитов (по умолчанию: 50, макс: 100) */
      limit?: number;
      /** Смещение (по умолчанию: 0) */
      offset?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AiplanCommitsResponseDTO, ApierrorsDefinedError>({
      path: `/api/auth/git/${workspaceSlug}/repositories/${repoName}/commits`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает метаданные репозитория (размер, количество веток, последний коммит)
   *
   * @tags GIT-BROWSE
   * @name AuthGitRepositoriesInfoList
   * @summary Browse: информация о репозитории
   * @request GET:/api/auth/git/{workspaceSlug}/repositories/{repoName}/info
   * @secure
   */
  authGitRepositoriesInfoList = (
    workspaceSlug: string,
    repoName: string,
    params: RequestParams = {},
  ) =>
    this.request<AiplanRepoInfoDTO, ApierrorsDefinedError>({
      path: `/api/auth/git/${workspaceSlug}/repositories/${repoName}/info`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список файлов и директорий в указанном пути репозитория
   *
   * @tags GIT-BROWSE
   * @name AuthGitRepositoriesTreeList
   * @summary Browse: просмотр дерева файлов
   * @request GET:/api/auth/git/{workspaceSlug}/repositories/{repoName}/tree
   * @secure
   */
  authGitRepositoriesTreeList = (
    workspaceSlug: string,
    repoName: string,
    query?: {
      /** Ветка/тег/коммит (по умолчанию: main/master) */
      ref?: string;
      /** Путь в репозитории (по умолчанию: корень) */
      path?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<AiplanTreeResponseDTO, ApierrorsDefinedError>({
      path: `/api/auth/git/${workspaceSlug}/repositories/${repoName}/tree`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
