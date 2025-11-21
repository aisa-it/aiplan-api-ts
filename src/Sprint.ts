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
  AiplanRequestIssueIdList,
  AiplanRequestSprint,
  AiplanRequestUserIdList,
  ApierrorsDefinedError,
  DaoPaginationResponse,
  DtoEntityActivityFull,
  DtoSprint,
  DtoSprintLight,
  TypesViewProps,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Sprint<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает список всех спринтов в рабочем пространстве.
   *
   * @tags Sprint
   * @name GetSprintList
   * @summary Спринты: получения списка спринтов
   * @request GET:/api/auth/workspaces/{workspaceSlug}/sprints/
   * @secure
   */
  getSprintList = (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<DtoSprintLight[], ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/sprints/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Создает новый спринт в рабочем пространстве.
   *
   * @tags Sprint
   * @name CreateSprint
   * @summary Спринты: создание спринта
   * @request POST:/api/auth/workspaces/{workspaceSlug}/sprints/
   * @secure
   */
  createSprint = (
    workspaceSlug: string,
    request: AiplanRequestSprint,
    params: RequestParams = {},
  ) =>
    this.request<DtoSprint, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/sprints/`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Получение информации о спринте.
   *
   * @tags Sprint
   * @name GetSprint
   * @summary Спринты: получение информации о спринте
   * @request GET:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/
   * @secure
   */
  getSprint = (
    workspaceSlug: string,
    sprintId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoSprint, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет спринт.
   *
   * @tags Sprint
   * @name DeleteSprint
   * @summary Спринты: Удалить спринт
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/
   * @secure
   */
  deleteSprint = (
    workspaceSlug: string,
    sprintId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Обновление информации о спринте.
   *
   * @tags Sprint
   * @name UpdateSprint
   * @summary Спринты: обновление информации о спринте
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/
   * @secure
   */
  updateSprint = (
    workspaceSlug: string,
    sprintId: string,
    request: AiplanRequestSprint,
    params: RequestParams = {},
  ) =>
    this.request<DtoSprint, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/`,
      method: "PATCH",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список активностей для указанного спринта с возможностью пагинации.
   *
   * @tags Sprint
   * @name GetSpringActivityList
   * @summary Спринты: получение активностей спринта
   * @request GET:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/activities/
   * @secure
   */
  getSpringActivityList = (
    workspaceSlug: string,
    sprintId: string,
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Количество записей на странице
       * @default 100
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoEntityActivityFull[];
      },
      ApierrorsDefinedError
    >({
      path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/activities/`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Изменяет список задач в спринте.
   *
   * @tags Sprint
   * @name SprintIssuesUpdate
   * @summary Спринты: Изменяет задачи в спринте
   * @request POST:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/issues/
   * @secure
   */
  sprintIssuesUpdate = (
    workspaceSlug: string,
    sprintId: string,
    request: AiplanRequestIssueIdList,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/issues/`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Позволяет пользователю установить настройки просмотра для конкретного спринта.
   *
   * @tags Sprint
   * @name UpdateSprintView
   * @summary Спринты: установка фильтров для просмотра
   * @request POST:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/sprint-views/
   * @secure
   */
  updateSprintView = (
    workspaceSlug: string,
    sprintId: string,
    view_props: TypesViewProps,
    params: RequestParams = {},
  ) =>
    this.request<string, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/sprint-views/`,
      method: "POST",
      body: view_props,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Изменение наблюдателей в спринте.
   *
   * @tags Sprint
   * @name SprintWatchersUpdate
   * @summary Спринты: Изменение наблюдателей в спринте
   * @request POST:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/watchers/
   * @secure
   */
  sprintWatchersUpdate = (
    workspaceSlug: string,
    sprintId: string,
    request: AiplanRequestUserIdList,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/watchers/`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
