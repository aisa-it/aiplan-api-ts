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
  DtoIssueProperty,
  DtoSetIssuePropertyRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class IssueProperties<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает все шаблоны полей проекта с их значениями для задачи.
   *
   * @tags IssueProperties
   * @name GetIssueProperties
   * @summary Свойства задачи: получение всех полей
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/properties/
   * @secure
   */
  getIssueProperties = (
    workspaceSlug: string,
    projectId: string,
    issueIdOrSeq: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoIssueProperty[], ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/properties/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Устанавливает или обновляет значение кастомного поля для задачи.
   *
   * @tags IssueProperties
   * @name SetIssueProperty
   * @summary Свойства задачи: установка значения
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/properties/{templateId}/
   * @secure
   */
  setIssueProperty = (
    workspaceSlug: string,
    projectId: string,
    issueIdOrSeq: string,
    templateId: string,
    request: DtoSetIssuePropertyRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoIssueProperty, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/properties/${templateId}/`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
