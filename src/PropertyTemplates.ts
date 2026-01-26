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
  DtoCreatePropertyTemplateRequest,
  DtoProjectPropertyTemplate,
  DtoUpdatePropertyTemplateRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PropertyTemplates<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает список всех шаблонов кастомных полей для проекта.
   *
   * @tags PropertyTemplates
   * @name GetPropertyTemplateList
   * @summary Шаблоны полей: получение списка
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/property-templates/
   * @secure
   */
  getPropertyTemplateList = (
    workspaceSlug: string,
    projectId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoProjectPropertyTemplate[], ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/property-templates/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Создает новый шаблон кастомного поля для проекта. Доступно только для админов проекта.
   *
   * @tags PropertyTemplates
   * @name CreatePropertyTemplate
   * @summary Шаблоны полей: создание
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/property-templates/
   * @secure
   */
  createPropertyTemplate = (
    workspaceSlug: string,
    projectId: string,
    request: DtoCreatePropertyTemplateRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoProjectPropertyTemplate, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/property-templates/`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет шаблон кастомного поля и все связанные значения. Доступно только для админов проекта.
   *
   * @tags PropertyTemplates
   * @name DeletePropertyTemplate
   * @summary Шаблоны полей: удаление
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/property-templates/{templateId}/
   * @secure
   */
  deletePropertyTemplate = (
    workspaceSlug: string,
    projectId: string,
    templateId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/property-templates/${templateId}/`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Обновляет шаблон кастомного поля. Доступно только для админов проекта.
   *
   * @tags PropertyTemplates
   * @name UpdatePropertyTemplate
   * @summary Шаблоны полей: обновление
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/property-templates/{templateId}/
   * @secure
   */
  updatePropertyTemplate = (
    workspaceSlug: string,
    projectId: string,
    templateId: string,
    request: DtoUpdatePropertyTemplateRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoProjectPropertyTemplate, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/property-templates/${templateId}/`,
      method: "PATCH",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
