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

import { ApierrorsDefinedError, DtoStateLight } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ProjectsStatesFlow<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает список статусов, в которые можно перевести новую задачу. Для администраторов возвращаются все статусы проекта, для остальных пользователей — только те статусы, которые разрешены в начале БП.
   *
   * @tags Projects StatesFlow
   * @name GetStartStates
   * @summary Задачи: получение доступных стартовых статусов
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/start-states
   * @secure
   */
  getStartStates = (
    workspaceSlug: string,
    projectId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoStateLight[], ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/start-states`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
