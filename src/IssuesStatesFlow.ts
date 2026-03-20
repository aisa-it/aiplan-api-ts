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

export class IssuesStatesFlow<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает список статусов, в которые можно перевести текущую задачу. Для администраторов возвращаются все статусы проекта, для остальных пользователей — только те статусы, которые разрешены правилами перехода из текущего статуса задачи.
   *
   * @tags Issues StatesFlow
   * @name GetAvailableStates
   * @summary Задачи: получение доступных статусов
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/available-states
   * @secure
   */
  getAvailableStates = (
    workspaceSlug: string,
    projectId: string,
    issueIdOrSeq: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoStateLight[], ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/available-states`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
