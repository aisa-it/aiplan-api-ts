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
  AiplanRequestMessage,
  AiplanRoleUpdRequest,
  AiplanUserCreateRequest,
  DaoPaginationResponse,
  DtoProject,
  DtoProjectLight,
  DtoReleaseNoteLight,
  DtoTariffication,
  DtoUserFeedback,
  DtoUserLight,
  DtoWorkspace,
  DtoWorkspaceWithCount,
  ErrdefsDefinedError,
  IssuesImportImportStatus,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AdminPanel<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращает список всех отзывов пользователей с поддержкой пагинации, сортировки и фильтрации
   *
   * @tags AdminPanel
   * @name GetAllFeedbackList
   * @summary Feedback: получение всех отзывов пользователей
   * @request GET:/api/auth/admin/feedbacks
   * @secure
   */
  getAllFeedbackList = (
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Количество результатов на странице
       * @default 100
       */
      limit?: number;
      /** Поле для сортировки */
      order_by?: string;
      /**
       * Направление сортировки: true - по убыванию, false - по возрастанию
       * @default false
       */
      desc?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoUserFeedback[];
      },
      ErrdefsDefinedError
    >({
      path: `/api/auth/admin/feedbacks`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Экспортирует отзывы пользователей в сжатом CSV файле
   *
   * @tags AdminPanel
   * @name ExportFeedbackList
   * @summary Feedback: экспорт отзывов пользователей
   * @request GET:/api/auth/admin/feedbacks/export
   * @secure
   */
  exportFeedbackList = (params: RequestParams = {}) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/admin/feedbacks/export`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description получение текущих импортов в активном статусе
   *
   * @tags AdminPanel
   * @name GetRunningImportList
   * @summary templates: список текущих импортов
   * @request GET:/api/auth/admin/imports/
   * @secure
   */
  getRunningImportList = (params: RequestParams = {}) =>
    this.request<IssuesImportImportStatus[], ErrdefsDefinedError>({
      path: `/api/auth/admin/imports/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список проектов внутри указанного рабочего пространства с поддержкой пагинации, сортировки и поиска
   *
   * @tags AdminPanel
   * @name GetWorkspaceProjectList
   * @summary Проекты: получение проектов рабочего пространства
   * @request GET:/api/auth/admin/projects/{workspaceId}
   * @secure
   */
  getWorkspaceProjectList = (
    workspaceId: string,
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Количество результатов на странице
       * @default 100
       */
      limit?: number;
      /** Поле для сортировки */
      order_by?: string;
      /**
       * Направление сортировки: true - по убыванию, false - по возрастанию
       * @default false
       */
      desc?: boolean;
      /** Строка для поиска */
      search_query?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoProject[];
      },
      ErrdefsDefinedError
    >({
      path: `/api/auth/admin/projects/${workspaceId}`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Создает новое примечание к релизу
   *
   * @tags AdminPanel
   * @name CreateReleaseNote
   * @summary Релизы: создание примечания к релизу
   * @request POST:/api/auth/admin/release-notes
   * @secure
   */
  createReleaseNote = (data: DtoReleaseNoteLight, params: RequestParams = {}) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/admin/release-notes`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Удаляет примечание к релизу по ID
   *
   * @tags AdminPanel
   * @name DeleteReleaseNote
   * @summary Релизы: удаление примечания к релизу
   * @request DELETE:/api/auth/admin/release-notes/{noteId}
   * @secure
   */
  deleteReleaseNote = (noteId: string, params: RequestParams = {}) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/admin/release-notes/${noteId}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Обновляет информацию о примечании к релизу
   *
   * @tags AdminPanel
   * @name UpdateReleaseNote
   * @summary Релизы: редактирование примечания к релизу
   * @request PATCH:/api/auth/admin/release-notes/{noteId}
   * @secure
   */
  updateReleaseNote = (
    noteId: string,
    data: DtoReleaseNoteLight,
    params: RequestParams = {},
  ) =>
    this.request<DtoReleaseNoteLight, ErrdefsDefinedError>({
      path: `/api/auth/admin/release-notes/${noteId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список тарифов с возможностью сортировки, фильтрации и пагинации
   *
   * @tags AdminPanel
   * @name GetAllTariffList
   * @summary Tariffs: получить список тарифов
   * @request GET:/api/auth/admin/tariffication/
   * @secure
   */
  getAllTariffList = (
    query?: {
      /** Поле для сортировки (по умолчанию user_id) */
      order_by?: string;
      /** Смещение (пагинация) (-1 для начала) */
      offset?: number;
      /** Лимит записей (максимум 1000, по умолчанию 100) */
      limit?: number;
      /** Сортировка по убыванию (по умолчанию true) */
      desc?: boolean;
      /** Строка поиска (по email, имени или фамилии) */
      search_query?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoTariffication[];
      },
      ErrdefsDefinedError
    >({
      path: `/api/auth/admin/tariffication/`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Создаёт новый тариф для пользователя
   *
   * @tags AdminPanel
   * @name CreateUserTariff
   * @summary Tariffs: создать новый тариф
   * @request POST:/api/auth/admin/tariffication/
   * @secure
   */
  createUserTariff = (tariff: DtoTariffication, params: RequestParams = {}) =>
    this.request<DtoTariffication, ErrdefsDefinedError>({
      path: `/api/auth/admin/tariffication/`,
      method: "POST",
      body: tariff,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает тариф, связанный с указанным пользователем
   *
   * @tags AdminPanel
   * @name GetUserTariff
   * @summary Tariffs: получить тариф пользователя
   * @request GET:/api/auth/admin/tariffication/{userId}
   * @secure
   */
  getUserTariff = (userId: string, params: RequestParams = {}) =>
    this.request<DtoTariffication, ErrdefsDefinedError>({
      path: `/api/auth/admin/tariffication/${userId}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Обновляет данные существующего тарифа
   *
   * @tags AdminPanel
   * @name UpdateUserTariff
   * @summary Tariffs: обновить тариф пользователя
   * @request PUT:/api/auth/admin/tariffication/{userId}
   * @secure
   */
  updateUserTariff = (
    userId: string,
    tariff: DtoTariffication,
    params: RequestParams = {},
  ) =>
    this.request<DtoTariffication, ErrdefsDefinedError>({
      path: `/api/auth/admin/tariffication/${userId}`,
      method: "PUT",
      body: tariff,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет тариф, связанный с указанным пользователем
   *
   * @tags AdminPanel
   * @name DeleteUserTariff
   * @summary Tariffs: удалить тариф пользователя
   * @request DELETE:/api/auth/admin/tariffication/{userId}
   * @secure
   */
  deleteUserTariff = (userId: string, params: RequestParams = {}) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/admin/tariffication/${userId}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description сброс шаблонов почты к установкам по умолчанию
   *
   * @tags AdminPanel
   * @name ReloadTemplates
   * @summary templates: сброс
   * @request POST:/api/auth/admin/templates/reset/
   * @secure
   */
  reloadTemplates = (params: RequestParams = {}) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/admin/templates/reset/`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает список всех пользователей с поддержкой пагинации, сортировки и поиска
   *
   * @tags AdminPanel
   * @name GetAllUserList
   * @summary Пользователи: получение всех пользователей
   * @request GET:/api/auth/admin/users
   * @secure
   */
  getAllUserList = (
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Количество результатов на странице
       * @default 100
       */
      limit?: number;
      /** Поле для сортировки */
      order_by?: string;
      /**
       * Направление сортировки: true - по убыванию, false - по возрастанию
       * @default false
       */
      desc?: boolean;
      /** Строка для поиска */
      search_query?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoUserLight[];
      },
      ErrdefsDefinedError
    >({
      path: `/api/auth/admin/users`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Создает нового пользователя и добавляет его в рабочее пространство при необходимости
   *
   * @tags AdminPanel
   * @name CreateUser
   * @summary Пользователи: создание пользователя
   * @request POST:/api/auth/admin/users
   * @secure
   */
  createUser = (data: AiplanUserCreateRequest, params: RequestParams = {}) =>
    this.request<DtoUserLight, ErrdefsDefinedError>({
      path: `/api/auth/admin/users`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Позволяет отправить сообщение всем или выбранным пользователям. Поддерживается отправка отложенных сообщений.
   *
   * @tags AdminPanel
   * @name CreateMessageForMember
   * @summary Пользователи: Отправка сообщения
   * @request POST:/api/auth/admin/users/message/
   * @secure
   */
  createMessageForMember = (
    data: AiplanRequestMessage,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/admin/users/message/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает информацию о пользователе по его ID
   *
   * @tags AdminPanel
   * @name GetUserById
   * @summary Пользователи: получение пользователя по ID
   * @request GET:/api/auth/admin/users/{userId}
   * @secure
   */
  getUserById = (userId: string, params: RequestParams = {}) =>
    this.request<DtoUserLight, ErrdefsDefinedError>({
      path: `/api/auth/admin/users/${userId}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет пользователя по его ID
   *
   * @tags AdminPanel
   * @name DeleteUser
   * @summary Пользователи: удаление пользователя
   * @request DELETE:/api/auth/admin/users/{userId}
   * @secure
   */
  deleteUser = (userId: string, params: RequestParams = {}) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/admin/users/${userId}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Обновляет информацию о пользователе
   *
   * @tags AdminPanel
   * @name UpdateUser
   * @summary Пользователи: изменение пользователя
   * @request PATCH:/api/auth/admin/users/{userId}
   * @secure
   */
  updateUser = (
    userId: string,
    data: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<DtoUserLight, ErrdefsDefinedError>({
      path: `/api/auth/admin/users/${userId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает отзыв пользователя по его ID
   *
   * @tags AdminPanel
   * @name GetUserFeedback
   * @summary Пользователи: получение отзыва пользователя
   * @request GET:/api/auth/admin/users/{userId}/feedback
   * @secure
   */
  getUserFeedback = (userId: string, params: RequestParams = {}) =>
    this.request<DtoUserFeedback, ErrdefsDefinedError>({
      path: `/api/auth/admin/users/${userId}/feedback`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список рабочих пространств, к которым принадлежит пользователь, с поддержкой пагинации, сортировки и поиска
   *
   * @tags AdminPanel
   * @name GeWorkspaceListByUser
   * @summary Пользователи: получение пространств пользователя
   * @request GET:/api/auth/admin/users/{userId}/workspaces
   * @secure
   */
  geWorkspaceListByUser = (
    userId: string,
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Количество результатов на странице
       * @default 100
       */
      limit?: number;
      /**
       * Все пространства, или где состоит пользователь
       * @default false
       */
      all?: boolean;
      /** Поле для сортировки */
      order_by?: string;
      /**
       * Направление сортировки: true - по убыванию, false - по возрастанию
       * @default false
       */
      desc?: boolean;
      /** Строка для поиска */
      search_query?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoWorkspace[];
      },
      ErrdefsDefinedError
    >({
      path: `/api/auth/admin/users/${userId}/workspaces`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список проектов пользователя в указанном рабочем пространстве с поддержкой пагинации, сортировки и поиска
   *
   * @tags AdminPanel
   * @name GetProjectListByUser
   * @summary Пользователи: получение проектов пользователя в рабочем пространстве
   * @request GET:/api/auth/admin/users/{userId}/workspaces/{workspaceId}
   * @secure
   */
  getProjectListByUser = (
    userId: string,
    workspaceId: string,
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Количество результатов на странице
       * @default 100
       */
      limit?: number;
      /**
       * Все проекты, или где состоит пользователь
       * @default false
       */
      all?: boolean;
      /** Поле для сортировки */
      order_by?: string;
      /**
       * Направление сортировки: true - по убыванию, false - по возрастанию
       * @default false
       */
      desc?: boolean;
      /** Строка для поиска */
      search_query?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoProjectLight[];
      },
      ErrdefsDefinedError
    >({
      path: `/api/auth/admin/users/${userId}/workspaces/${workspaceId}`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список всех рабочих пространств с поддержкой пагинации, сортировки и поиска
   *
   * @tags AdminPanel
   * @name GetAllWorkspaceList
   * @summary Пространство: получение всех рабочих пространств
   * @request GET:/api/auth/admin/workspaces
   * @secure
   */
  getAllWorkspaceList = (
    query?: {
      /**
       * Смещение для пагинации
       * @default 0
       */
      offset?: number;
      /**
       * Количество результатов на странице
       * @default 100
       */
      limit?: number;
      /** Поле для сортировки */
      order_by?: string;
      /**
       * Направление сортировки: true - по убыванию, false - по возрастанию
       * @default false
       */
      desc?: boolean;
      /** Строка для поиска */
      search_query?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoWorkspaceWithCount[];
      },
      ErrdefsDefinedError
    >({
      path: `/api/auth/admin/workspaces`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Метод позволяет обновить роль участника рабочего пространства. Если участник отсутствует, он будет создан.
   *
   * @tags AdminPanel
   * @name AuthAdminWorkspacesMembersCreate
   * @summary Пользователи: Обновить роль участника пространства
   * @request POST:/api/auth/admin/workspaces/{workspaceId}/members/{userId}
   */
  authAdminWorkspacesMembersCreate = (
    workspaceId: string,
    userId: string,
    body: AiplanRoleUpdRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/admin/workspaces/${workspaceId}/members/${userId}`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Удаляет участника рабочего пространства, а также все его связи с проектами внутри данного пространства.
   *
   * @tags AdminPanel
   * @name AuthAdminWorkspacesMembersDelete
   * @summary Пользователи: Удалить участника пространства
   * @request DELETE:/api/auth/admin/workspaces/{workspaceId}/members/{userId}
   */
  authAdminWorkspacesMembersDelete = (
    workspaceId: string,
    userId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/admin/workspaces/${workspaceId}/members/${userId}`,
      method: "DELETE",
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Метод обновляет роль участника проекта в рамках рабочего пространства. Если участник не найден в проекте, он будет создан. Проверяется, что участник является членом рабочего пространства.
   *
   * @tags AdminPanel
   * @name AuthAdminWorkspacesProjectsMembersCreate
   * @summary Пользователи: Обновить роль участника проекта
   * @request POST:/api/auth/admin/workspaces/{workspaceId}/projects/{projectId}/members/{userId}
   */
  authAdminWorkspacesProjectsMembersCreate = (
    workspaceId: string,
    userId: string,
    projectId: string,
    body: AiplanRoleUpdRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/admin/workspaces/${workspaceId}/projects/${projectId}/members/${userId}`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Метод удаляет участника проекта из рабочего пространства. Если участник не найден в проекте, возвращается ошибка.
   *
   * @tags AdminPanel
   * @name AuthAdminWorkspacesProjectsMembersDelete
   * @summary Пользователи: Удалить участника проекта
   * @request DELETE:/api/auth/admin/workspaces/{workspaceId}/projects/{projectId}/members/{userId}
   */
  authAdminWorkspacesProjectsMembersDelete = (
    workspaceId: string,
    userId: string,
    projectId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/admin/workspaces/${workspaceId}/projects/${projectId}/members/${userId}`,
      method: "DELETE",
      type: ContentType.Json,
      ...params,
    });
}
