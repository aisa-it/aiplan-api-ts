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
  DtoAddSSHKeyRequest,
  DtoAddSSHKeyResponse,
  DtoListSSHKeysResponse,
  DtoSSHConfigResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class GitSsh<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает конфигурацию SSH сервера (host, port, enabled)
   *
   * @tags GIT-SSH
   * @name AuthGitSshConfigList
   * @summary SSH Config: получить конфигурацию SSH
   * @request GET:/api/auth/git/ssh-config/
   * @secure
   */
  authGitSshConfigList = (params: RequestParams = {}) =>
    this.request<DtoSSHConfigResponse, ApierrorsDefinedError>({
      path: `/api/auth/git/ssh-config/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список всех SSH ключей текущего пользователя
   *
   * @tags GIT-SSH
   * @name AuthGitSshKeysList
   * @summary SSH Keys: список SSH ключей
   * @request GET:/api/auth/git/ssh-keys/
   * @secure
   */
  authGitSshKeysList = (params: RequestParams = {}) =>
    this.request<DtoListSSHKeysResponse, ApierrorsDefinedError>({
      path: `/api/auth/git/ssh-keys/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Добавляет новый SSH публичный ключ для текущего пользователя
   *
   * @tags GIT-SSH
   * @name AuthGitSshKeysCreate
   * @summary SSH Keys: добавить SSH ключ
   * @request POST:/api/auth/git/ssh-keys/
   * @secure
   */
  authGitSshKeysCreate = (
    request: DtoAddSSHKeyRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoAddSSHKeyResponse, ApierrorsDefinedError>({
      path: `/api/auth/git/ssh-keys/`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет SSH ключ по ID
   *
   * @tags GIT-SSH
   * @name AuthGitSshKeysDelete
   * @summary SSH Keys: удалить SSH ключ
   * @request DELETE:/api/auth/git/ssh-keys/{keyId}
   * @secure
   */
  authGitSshKeysDelete = (keyId: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/git/ssh-keys/${keyId}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
