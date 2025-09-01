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
  AiplanAddProjectToFavoritesRequest,
  AiplanCheckProjectIdentifierAvailabilityResponse,
  AiplanCreateProjectRequest,
  AiplanFilterParams,
  AiplanGetRulesLogfilterRequest,
  AiplanJoinProjectsRequest,
  AiplanJoinProjectsSuccessResponse,
  AiplanProjectNotificationRequest,
  AiplanUpdateStateRequest,
  ApierrorsDefinedError,
  DaoPaginationResponse,
  DtoEntityActivityFull,
  DtoIssueTemplate,
  DtoLabelLight,
  DtoProject,
  DtoProjectFavorites,
  DtoProjectLight,
  DtoProjectMember,
  DtoProjectMemberLight,
  DtoRulesLog,
  DtoStateLight,
  DtoUserLight,
  TypesViewProps,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Projects<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает список тегов для указанных проектов с возможностью поиска по названию тега или проекта
   *
   * @tags Projects
   * @name GetFilterLabelList
   * @summary Проекты: получение списка тегов (меток) выбранных проектов
   * @request POST:/api/auth/filters/labels/
   * @secure
   */
  getFilterLabelList = (
    data: AiplanFilterParams,
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Лимит записей
       * @default 100
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoLabelLight[];
      },
      ApierrorsDefinedError
    >({
      path: `/api/auth/filters/labels/`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список участников (пользователей) для указанных проектов с возможностью поиска по имени пользователя.
   *
   * @tags Projects
   * @name GetFilterMemberList
   * @summary Проекты: получение списка участников выбранных проектов
   * @request POST:/api/auth/filters/members/
   * @secure
   */
  getFilterMemberList = (
    data: AiplanFilterParams,
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Лимит записей
       * @default 100
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoUserLight[];
      },
      ApierrorsDefinedError
    >({
      path: `/api/auth/filters/members/`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список статусов для указанных проектов с возможностью поиска по названию статуса или проекта
   *
   * @tags Projects
   * @name GetFilterStateList
   * @summary Проекты: получение списка статусов выбранных проектов
   * @request POST:/api/auth/filters/states/
   * @secure
   */
  getFilterStateList = (
    data: AiplanFilterParams,
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Лимит записей
       * @default 100
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoStateLight[];
      },
      ApierrorsDefinedError
    >({
      path: `/api/auth/filters/states/`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает информацию о том, существует ли идентификатор проекта в указанном рабочем пространстве.
   *
   * @tags Projects
   * @name CheckProjectIdentifierAvailability
   * @summary Проекты: проверка идентификатора проекта на уникальность
   * @request GET:/api/auth/workspaces/{workspaceSlug}/project-identifiers
   * @secure
   */
  checkProjectIdentifierAvailability = (
    workspaceSlug: string,
    query: {
      /** Идентификатор проекта */
      name: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      AiplanCheckProjectIdentifierAvailabilityResponse,
      ApierrorsDefinedError
    >({
      path: `/api/auth/workspaces/${workspaceSlug}/project-identifiers`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список всех проектов в рабочем пространстве, к которым у пользователя есть доступ.
   *
   * @tags Projects
   * @name GetProjectList
   * @summary Проекты: получение списка проектов
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects
   * @secure
   */
  getProjectList = (
    workspaceSlug: string,
    query?: {
      /** Поисковый запрос для фильтрации проектов по названию */
      search_query?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoProjectLight[], ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Создает новый проект в рабочем пространстве. Необходимы права на создание проектов.
   *
   * @tags Projects
   * @name CreateProject
   * @summary Проекты: создание проекта
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects
   * @secure
   */
  createProject = (
    workspaceSlug: string,
    request: AiplanCreateProjectRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoProject, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Позволяет пользователю присоединиться к нескольким проектам в рабочем пространстве.
   *
   * @tags Projects
   * @name JoinProjects
   * @summary Проекты: подключение пользователя к списку проектов
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/join/
   * @secure
   */
  joinProjects = (
    workspaceSlug: string,
    projects: AiplanJoinProjectsRequest,
    params: RequestParams = {},
  ) =>
    this.request<AiplanJoinProjectsSuccessResponse, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/join/`,
      method: "POST",
      body: projects,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает информацию о проекте по его идентификатору.
   *
   * @tags Projects
   * @name GetProject
   * @summary Проекты: получение проекта
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}
   * @secure
   */
  getProject = (
    workspaceSlug: string,
    projectId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoProject, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет проект, если у пользователя есть соответствующие права.
   *
   * @tags Projects
   * @name DeleteProject
   * @summary Проекты: удаление проекта
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}
   * @secure
   */
  deleteProject = (
    workspaceSlug: string,
    projectId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Обновляет информацию о проекте, включая название, ответственного и списки наблюдателей и исполнителей.
   *
   * @tags Projects
   * @name UpdateProject
   * @summary Проекты: изменение проекта
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}
   * @secure
   */
  updateProject = (
    workspaceSlug: string,
    projectId: string,
    project: DtoProject,
    params: RequestParams = {},
  ) =>
    this.request<DtoProject, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}`,
      method: "PATCH",
      body: project,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список активностей для указанного проекта с возможностью пагинации.
   *
   * @tags Projects
   * @name GetProjectActivityList
   * @summary Проекты: получение активностей рабочего проекта
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/activities
   * @secure
   */
  getProjectActivityList = (
    workspaceSlug: string,
    projectId: string,
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
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/activities`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список всех тегов, связанных с проектом, с возможностью фильтрации по названию
   *
   * @tags Projects
   * @name GetIssueLabelList
   * @summary Проекты (теги): получение списка тегов
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issue-labels
   * @secure
   */
  getIssueLabelList = (
    workspaceSlug: string,
    projectId: string,
    query?: {
      /** Поисковый запрос для фильтрации тегов по названию */
      search_query?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoLabelLight[], ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issue-labels`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Создает новый тег для проекта
   *
   * @tags Projects
   * @name CreateIssueLabel
   * @summary Проекты (теги): создание тега
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issue-labels
   * @secure
   */
  createIssueLabel = (
    workspaceSlug: string,
    projectId: string,
    data: DtoLabelLight,
    params: RequestParams = {},
  ) =>
    this.request<DtoLabelLight, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issue-labels`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает данные тега по его ID
   *
   * @tags Projects
   * @name GetIssueLabel
   * @summary Проекты (теги): получение информации о теге
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issue-labels/{labelId}
   * @secure
   */
  getIssueLabel = (
    workspaceSlug: string,
    projectId: string,
    labelId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoLabelLight, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issue-labels/${labelId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description Удаляет тег по его ID из проекта
   *
   * @tags Projects
   * @name DeleteIssueLabel
   * @summary Проекты (теги): удаление тега
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issue-labels/{labelId}
   * @secure
   */
  deleteIssueLabel = (
    workspaceSlug: string,
    projectId: string,
    labelId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issue-labels/${labelId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Обновляет выбранные данные тега по его ID
   *
   * @tags Projects
   * @name UpdateIssueLabel
   * @summary Проекты (теги): обновление тега
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issue-labels/{labelId}
   * @secure
   */
  updateIssueLabel = (
    workspaceSlug: string,
    projectId: string,
    labelId: string,
    data: DtoLabelLight,
    params: RequestParams = {},
  ) =>
    this.request<DtoLabelLight, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issue-labels/${labelId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Обновляет настройки уведомлений для текущего участника проекта.
   *
   * @tags Projects
   * @name UpdateMyNotifications
   * @summary Проекты (участники): обновление настроек уведомлений текущего участника проекта
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/me/notifications/
   * @secure
   */
  updateMyNotifications = (
    workspaceSlug: string,
    projectId: string,
    notificationSettings: AiplanProjectNotificationRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/me/notifications/`,
      method: "POST",
      body: notificationSettings,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает список участников проекта с возможностью фильтрации по имени или электронной почте.
   *
   * @tags Projects
   * @name GetProjectMemberList
   * @summary Проекты (участники): получение списка участников проекта
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/members
   * @secure
   */
  getProjectMemberList = (
    workspaceSlug: string,
    projectId: string,
    query?: {
      /**
       * Смещение для пагинации
       * @default -1
       */
      offset?: number;
      /**
       * Количество участников на странице
       * @default 100
       */
      limit?: number;
      /**
       * Поисковый запрос для фильтрации участников по имени или электронной почте
       * @default """"
       */
      search_query?: string;
      /**
       * Поле для сортировки
       * @default ""last_name""
       */
      order_by?: string;
      /**
       * Направление сортировки: true - по убыванию, false - по возрастанию
       * @default true
       */
      desc?: boolean;
      /**
       * Список полей для поиска
       * @default "["username", "email", "last_name", "first_name"]"
       */
      find_by?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        my_entity?: DtoProjectMemberLight;
        result?: DtoProjectMemberLight[];
      },
      ApierrorsDefinedError
    >({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/members`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Добавляет нового участника в проект. Проверяет наличие пользователя в рабочем пространстве и уникальность его участия в проекте.
   *
   * @tags Projects
   * @name AddMemberToProject
   * @summary Проекты (участники): добавление участника в проект
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/members/add
   * @secure
   */
  addMemberToProject = (
    workspaceSlug: string,
    projectId: string,
    memberId: DtoProjectMember,
    params: RequestParams = {},
  ) =>
    this.request<DtoProjectMemberLight, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/members/add`,
      method: "POST",
      body: memberId,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает информацию о конкретном участнике проекта по его идентификатору.
   *
   * @tags Projects
   * @name GetProjectMember
   * @summary Проекты (участники): получение информации об участнике проекта
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/members/{memberId}
   * @secure
   */
  getProjectMember = (
    workspaceSlug: string,
    projectId: string,
    memberId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoProjectMemberLight, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/members/${memberId}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет участника проекта по его идентификатору. Проверяет права пользователя и ограничения на удаление.
   *
   * @tags Projects
   * @name DeleteProjectMember
   * @summary Проекты (участники): удаление участника из проекта
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/members/{memberId}
   * @secure
   */
  deleteProjectMember = (
    workspaceSlug: string,
    projectId: string,
    memberId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/members/${memberId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Обновляет роль участника проекта по его идентификатору. Проверяет, что обновление не нарушает ограничения по ролям и статусу участника.
   *
   * @tags Projects
   * @name UpdateProjectMember
   * @summary Проекты (участники): обновление роли участника проекта
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/members/{memberId}
   * @secure
   */
  updateProjectMember = (
    workspaceSlug: string,
    projectId: string,
    memberId: string,
    role: Record<string, number>,
    params: RequestParams = {},
  ) =>
    this.request<DtoProjectMemberLight, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/members/${memberId}`,
      method: "PATCH",
      body: role,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает информацию о текущем пользователе как члене проекта.
   *
   * @tags Projects
   * @name GetProjectMemberMe
   * @summary Проекты: получение информации о членстве текущего пользователя в проекте
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/project-members/me
   * @secure
   */
  getProjectMemberMe = (
    workspaceSlug: string,
    projectId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoProjectMember, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/project-members/me`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description Позволяет пользователю установить настройки просмотра для конкретного проекта.
   *
   * @tags Projects
   * @name UpdateProjectView
   * @summary Проекты: установка фильтров для просмотра проектов
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/project-views/
   * @secure
   */
  updateProjectView = (
    workspaceSlug: string,
    projectId: string,
    view_props: TypesViewProps,
    params: RequestParams = {},
  ) =>
    this.request<string, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/project-views/`,
      method: "POST",
      body: view_props,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Получает логи правил проекта с возможностью фильтрации по типу и пагинации
   *
   * @tags Projects
   * @name GetRulesLog
   * @summary Проекты (логи): получение логов правил
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/rules-log
   * @secure
   */
  getRulesLog = (
    workspaceSlug: string,
    projectId: string,
    data: AiplanGetRulesLogfilterRequest,
    query?: {
      /**
       * Смещение для пагинации
       * @default -1
       */
      offset?: number;
      /**
       * Лимит записей
       * @default 30
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoRulesLog[];
      },
      ApierrorsDefinedError
    >({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/rules-log`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список всех статусов проекта с возможностью фильтрации по названию
   *
   * @tags Projects
   * @name GetStateList
   * @summary Проекты (статусы): получение статусов проекта
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/states
   * @secure
   */
  getStateList = (
    workspaceSlug: string,
    projectId: string,
    query?: {
      /** Поисковый запрос для фильтрации статусов по названию */
      search_query?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Record<string, DtoStateLight[]>, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/states`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Создает новый статус для проекта
   *
   * @tags Projects
   * @name CreateState
   * @summary Проекты (статусы): создание статуса
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/states
   * @secure
   */
  createState = (
    workspaceSlug: string,
    projectId: string,
    data: DtoStateLight,
    params: RequestParams = {},
  ) =>
    this.request<DtoStateLight, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/states`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает данные статуса по его ID
   *
   * @tags Projects
   * @name GetState
   * @summary Проекты (статусы): получение информации о статусе
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/states/{stateId}
   * @secure
   */
  getState = (
    workspaceSlug: string,
    projectId: string,
    stateId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoStateLight, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/states/${stateId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description Удаляет статус по его ID, если он не является статусом по умолчанию и не используется задачами
   *
   * @tags Projects
   * @name DeleteState
   * @summary Проекты (статусы): удаление статуса
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/states/{stateId}
   * @secure
   */
  deleteState = (
    workspaceSlug: string,
    projectId: string,
    stateId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/states/${stateId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Обновляет данные существующего статуса по его ID
   *
   * @tags Projects
   * @name UpdateState
   * @summary Проекты (статусы): обновление статуса
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/states/{stateId}
   * @secure
   */
  updateState = (
    workspaceSlug: string,
    projectId: string,
    stateId: string,
    data: AiplanUpdateStateRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoStateLight, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/states/${stateId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список шаблонов задач с пагинацией.
   *
   * @tags Projects
   * @name GetProjectIssueTemplates
   * @summary Проекты (шаблоны задач): получение списка шаблонов задач
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/templates
   * @secure
   */
  getProjectIssueTemplates = (
    workspaceSlug: string,
    projectId: string,
    query?: {
      /**
       * Смещение для пагинации
       * @default -1
       */
      offset?: number;
      /**
       * Количество участников на странице
       * @default 100
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoIssueTemplate[];
      },
      ApierrorsDefinedError
    >({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/templates`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Создает новый шаблон задач для проекта
   *
   * @tags Projects
   * @name CreateIssueTemplate
   * @summary Проекты (шаблоны задач): создание шаблона
   * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/templates
   * @secure
   */
  createIssueTemplate = (
    workspaceSlug: string,
    projectId: string,
    data: DtoIssueTemplate,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/templates`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает данные шаблона задач по его ID
   *
   * @tags Projects
   * @name GetIssueTemplate
   * @summary Проекты (шаблоны задач): получение информации о шаблоне
   * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/templates/{templateId}
   * @secure
   */
  getIssueTemplate = (
    workspaceSlug: string,
    projectId: string,
    templateId: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoIssueTemplate, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/templates/${templateId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description Удаляет шаблон задач для проекта
   *
   * @tags Projects
   * @name DeleteIssueTemplate
   * @summary Проекты (шаблоны задач): удаление шаблона
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/templates/{templateId}
   * @secure
   */
  deleteIssueTemplate = (
    workspaceSlug: string,
    projectId: string,
    templateId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/templates/${templateId}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Обновляет шаблон задач для проекта
   *
   * @tags Projects
   * @name UpdateIssueTemplate
   * @summary Проекты (шаблоны задач): обновление шаблона
   * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/templates/{templateId}
   * @secure
   */
  updateIssueTemplate = (
    workspaceSlug: string,
    projectId: string,
    templateId: string,
    data: DtoIssueTemplate,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/templates/${templateId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает список избранных проектов текущего пользователя в рабочем пространстве.
   *
   * @tags Projects
   * @name GetFavoriteProjects
   * @summary Проекты: получение списка избранных проектов пользователя
   * @request GET:/api/auth/workspaces/{workspaceSlug}/user-favorite-projects/
   * @secure
   */
  getFavoriteProjects = (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<DtoProjectFavorites[], ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/user-favorite-projects/`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description Добавляет указанный проект в список избранных проектов текущего пользователя в рабочем пространстве.
   *
   * @tags Projects
   * @name AddProjectToFavorites
   * @summary Проекты: добавление проекта в список избранных проектов пользователя
   * @request POST:/api/auth/workspaces/{workspaceSlug}/user-favorite-projects/
   * @secure
   */
  addProjectToFavorites = (
    workspaceSlug: string,
    project: AiplanAddProjectToFavoritesRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/user-favorite-projects/`,
      method: "POST",
      body: project,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Удаляет указанный проект из списка избранных проектов текущего пользователя в рабочем пространстве.
   *
   * @tags Projects
   * @name RemoveProjectFromFavorites
   * @summary Проекты: удаление проекта из списка избранных проектов пользователя
   * @request DELETE:/api/auth/workspaces/{workspaceSlug}/user-favorite-projects/{projectId}
   * @secure
   */
  removeProjectFromFavorites = (
    workspaceSlug: string,
    projectId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/workspaces/${workspaceSlug}/user-favorite-projects/${projectId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
