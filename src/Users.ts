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
  AiplanEmailCaptchaRequest,
  AiplanEmailRequest,
  AiplanEmailVerifyRequest,
  AiplanLoginRequest,
  AiplanPasswordRequest,
  AiplanPostFeedbackRequest,
  AiplanUserUpdateRequest,
  AltchaChallenge,
  ApierrorsDefinedError,
  DaoPaginationResponse,
  DtoEntityActivityFull,
  DtoPasswordResponse,
  DtoProjectLight,
  DtoProjectMember,
  DtoUser,
  DtoUserFeedback,
  DtoUserLight,
  DtoWorkspaceMember,
  TypesActivityTable,
  TypesViewProps,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Позволяет текущему пользователю изменить свой пароль. В случае успеха завершает все активные сеансы пользователя.
   *
   * @tags Users
   * @name UpdateMyPassword
   * @summary Пользователи (управление доступом): смена пароля текущего пользователя
   * @request POST:/api/auth/change-my-password/
   * @secure
   */
  updateMyPassword = (
    data: AiplanPasswordRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoPasswordResponse, ApierrorsDefinedError>({
      path: `/api/auth/change-my-password/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Отправляет запрос на восстановление пароля для указанного email. Возвращает статус 200 даже если пользователь не найден или неактивен для повышения безопасности.
   *
   * @tags Users
   * @name ForgotPassword
   * @summary Пользователи (управление доступом): запрос на восстановление пароля
   * @request POST:/api/auth/forgot-password/
   */
  forgotPassword = (
    data: AiplanEmailCaptchaRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/forgot-password/`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Позволяет пользователю сбросить пароль после перехода по ссылке из письма. Сбрасывает все активные сеансы пользователя после успешного обновления пароля.
   *
   * @tags Users
   * @name ResetPassword
   * @summary Пользователи (управление доступом): сброс пароля по ссылке из почты
   * @request POST:/api/auth/reset-password/{uidb64}/{token}/
   */
  resetPassword = (
    uidb64: string,
    token: string,
    data: AiplanPasswordRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoPasswordResponse, ApierrorsDefinedError>({
      path: `/api/auth/reset-password/${uidb64}/${token}/`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Позволяет суперпользователю изменить пароль другого пользователя, идентифицированного через `uidb64`.
   *
   * @tags Users
   * @name ResetUserPassword
   * @summary Пользователи (управление доступом): смена пароля другого пользователя (только для суперпользователя)
   * @request POST:/api/auth/reset-user-password/{uidb64}/
   * @secure
   */
  resetUserPassword = (
    uidb64: string,
    data: AiplanPasswordRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoPasswordResponse, ApierrorsDefinedError>({
      path: `/api/auth/reset-user-password/${uidb64}/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Завершает все активные сессии пользователя, обновляя время и IP последнего выхода. Если refresh-токен отсутствует, возвращает ошибку.
   *
   * @tags Users
   * @name SignOutEverywhere
   * @summary Пользователи (управление доступом): выход из всех сессий
   * @request POST:/api/auth/sign-out-everywhere/
   * @secure
   */
  signOutEverywhere = (params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/sign-out-everywhere/`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description Завершает текущую сессию пользователя, обновляя время и IP последнего выхода. Если refresh-токен отсутствует, возвращает ошибку.
   *
   * @tags Users
   * @name SignOut
   * @summary Пользователи (управление доступом): выход из текущей сессии
   * @request POST:/api/auth/sign-out/
   * @secure
   */
  signOut = (params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/sign-out/`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description Возвращает список последних 100 действий текущего пользователя из смежных пространств с текущим пользователем, если он не суперюзер
   *
   * @tags Users
   * @name GetUserActivityList
   * @summary Пользователи: получение последних действий указанного пользователя
   * @request GET:/api/auth/users/:userId/activities/
   * @secure
   */
  getUserActivityList = (
    userId: string,
    query?: {
      /**
       * День выборки активностей
       * @default """"
       */
      day?: string;
      /**
       * Смещение для пагинации
       * @default -1
       */
      offset?: number;
      /**
       * Лимит результатов
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
      path: `/api/auth/users/${userId}/activities/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает информацию о текущем пользователе
   *
   * @tags Users
   * @name GetCurrentUser
   * @summary Пользователи: получение данных о текущем пользователе
   * @request GET:/api/auth/users/me/
   * @secure
   */
  getCurrentUser = (params: RequestParams = {}) =>
    this.request<DtoUser, ApierrorsDefinedError>({
      path: `/api/auth/users/me/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Обновляет информацию о текущем пользователе
   *
   * @tags Users
   * @name UpdateCurrentUser
   * @summary Пользователи: обновление данных о текущем пользователе
   * @request PATCH:/api/auth/users/me/
   * @secure
   */
  updateCurrentUser = (
    data: AiplanUserUpdateRequest,
    params: RequestParams = {},
  ) =>
    this.request<DtoUser, ApierrorsDefinedError>({
      path: `/api/auth/users/me/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список последних 100 действий текущего пользователя
   *
   * @tags Users
   * @name GetMyActivityList
   * @summary Пользователи: получение последних действий пользователя
   * @request GET:/api/auth/users/me/activities/
   * @secure
   */
  getMyActivityList = (
    query?: {
      /**
       * День выборки активностей
       * @default """"
       */
      day?: string;
      /**
       * Смещение для пагинации
       * @default -1
       */
      offset?: number;
      /**
       * Лимит результатов
       * @default 100
       */
      limit?: number;
      /** Workspace IDs */
      workspace?: string[];
      /** Project IDs */
      project?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: DtoEntityActivityFull[];
      },
      ApierrorsDefinedError
    >({
      path: `/api/auth/users/me/activities/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает таблицу активностей пользователя за указанный период.
   *
   * @tags Users
   * @name GetMyActivitiesTable
   * @summary Пользователи: получение таблицы активностей пользователя
   * @request GET:/api/auth/users/me/activities/table/
   * @secure
   */
  getMyActivitiesTable = (
    query: {
      /** Начальная дата периода в формате YYYY-MM-DD */
      from: string;
      /** Конечная дата периода в формате YYYY-MM-DD */
      to: string;
      /** Workspace IDs */
      workspace?: string[];
      /** Project IDs */
      project?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<TypesActivityTable, ApierrorsDefinedError>({
      path: `/api/auth/users/me/activities/table/`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает список всех проектов, к которым принадлежит текущий пользователь, с возможностью поиска по имени
   *
   * @tags Users
   * @name GetCurrentUserAllProjectList
   * @summary Пользователи: получение всех проектов текущего пользователя
   * @request GET:/api/auth/users/me/all/projects/
   * @secure
   */
  getCurrentUserAllProjectList = (
    query?: {
      /** Строка поиска по имени проекта */
      search_query?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoProjectLight[], ApierrorsDefinedError>({
      path: `/api/auth/users/me/all/projects/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Обновляет аватар текущего пользователя
   *
   * @tags Users
   * @name UpdateCurrentUserAvatar
   * @summary Пользователи: обновление аватара текущего пользователя
   * @request POST:/api/auth/users/me/avatar/
   * @secure
   */
  updateCurrentUserAvatar = (
    data: {
      /**
       * Файл аватара
       * @format binary
       */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoUser, ApierrorsDefinedError>({
      path: `/api/auth/users/me/avatar/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Удаляет аватар текущего пользователя
   *
   * @tags Users
   * @name DeleteCurrentUserAvatar
   * @summary Пользователи: удаление аватара текущего пользователя
   * @request DELETE:/api/auth/users/me/avatar/
   * @secure
   */
  deleteCurrentUserAvatar = (params: RequestParams = {}) =>
    this.request<DtoUser, ApierrorsDefinedError>({
      path: `/api/auth/users/me/avatar/`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Позволяет текущему пользователю изменить свой Email. В случае успеха отправляет код верификации на новую почту.
   *
   * @tags Users
   * @name ChangeMyEmail
   * @summary Пользователи (управление доступом): смена email текущего пользователя
   * @request POST:/api/auth/users/me/change-email/
   * @secure
   */
  changeMyEmail = (data: AiplanEmailRequest, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/users/me/change-email/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает отзыв, оставленный текущим пользователем
   *
   * @tags Users
   * @name GetMyFeedback
   * @summary Пользователи: получение отзыва текущего пользователя
   * @request GET:/api/auth/users/me/feedback/
   * @secure
   */
  getMyFeedback = (params: RequestParams = {}) =>
    this.request<DtoUserFeedback, ApierrorsDefinedError>({
      path: `/api/auth/users/me/feedback/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Сохраняет или обновляет отзыв, предоставленный текущим пользователем
   *
   * @tags Users
   * @name CreateMyFeedback
   * @summary Пользователи: отправка отзыва от текущего пользователя
   * @request POST:/api/auth/users/me/feedback/
   * @secure
   */
  createMyFeedback = (
    data: AiplanPostFeedbackRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/users/me/feedback/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Удаляет отзыв, предоставленную текущим пользователем
   *
   * @tags Users
   * @name DeleteMyFeedback
   * @summary Пользователи: удаление отзыва текущего пользователя
   * @request DELETE:/api/auth/users/me/feedback/
   * @secure
   */
  deleteMyFeedback = (params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/users/me/feedback/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Возвращает информацию о членстве текущего пользователя в указанных проектах, если не указывать проекты - возвращаются все членства
   *
   * @tags Users
   * @name GetCurrentUserProjectMemberships
   * @summary Пользователи: получение членства в проектах
   * @request GET:/api/auth/users/me/memberships/projects/
   * @secure
   */
  getCurrentUserProjectMemberships = (
    projects?: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoProjectMember[], ApierrorsDefinedError>({
      path: `/api/auth/users/me/memberships/projects/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает информацию о членстве текущего пользователя в указанных рабочих пространствах, если не указывать пространства - возвращаются все членства
   *
   * @tags Users
   * @name GetCurrentUserWorkspaceMemberships
   * @summary Пользователи: получение членства в рабочих пространствах
   * @request GET:/api/auth/users/me/memberships/workspaces/
   * @secure
   */
  getCurrentUserWorkspaceMemberships = (
    workspaces?: string,
    params: RequestParams = {},
  ) =>
    this.request<DtoWorkspaceMember[], ApierrorsDefinedError>({
      path: `/api/auth/users/me/memberships/workspaces/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Обновляет статус онбординга текущего пользователя и сохраняет его данные
   *
   * @tags Users
   * @name UpdateUserOnBoard
   * @summary Пользователи: онбординг пользователя
   * @request POST:/api/auth/users/me/onboard/
   * @secure
   */
  updateUserOnBoard = (data: DtoUser, params: RequestParams = {}) =>
    this.request<DtoUser, void | ApierrorsDefinedError>({
      path: `/api/auth/users/me/onboard/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает текущий токен авторизации пользователя, если он существует
   *
   * @tags Users
   * @name GetMyAuthToken
   * @summary Пользователи (управление доступом): получение текущего токена авторизации пользователя
   * @request GET:/api/auth/users/me/token/
   * @secure
   */
  getMyAuthToken = (params: RequestParams = {}) =>
    this.request<string, ApierrorsDefinedError>({
      path: `/api/auth/users/me/token/`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description Создает новый токен авторизации для текущего пользователя и возвращает успешный ответ
   *
   * @tags Users
   * @name ResetMyAuthToken
   * @summary Пользователи (управление доступом): сброс токена авторизации пользователя
   * @request POST:/api/auth/users/me/token/reset/
   * @secure
   */
  resetMyAuthToken = (params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/users/me/token/reset/`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description Обновляет шаги прохождения обучения на платформе
   *
   * @tags Users
   * @name UpdateUserTutorial
   * @summary Пользователи: прохождение обучения
   * @request POST:/api/auth/users/me/tutorial/
   * @secure
   */
  updateUserTutorial = (
    query: {
      /** Шаг обучения */
      step: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DtoUser, ApierrorsDefinedError>({
      path: `/api/auth/users/me/tutorial/`,
      method: "POST",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Позволяет текущему пользователю изменить свой Email. Сравнивает код верификации отправленый на новый Email.
   *
   * @tags Users
   * @name ConfirmEmail
   * @summary Пользователи (управление доступом): Верификация Email
   * @request GET:/api/auth/users/me/verify-email/{token}/
   * @secure
   */
  confirmEmail = (
    token: string,
    data: AiplanEmailVerifyRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/users/me/verify-email/${token}/`,
      method: "GET",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Обновляет свойства представления текущего пользователя
   *
   * @tags Users
   * @name UpdateUserViewProps
   * @summary Пользователи: обновление пользовательских настроек представления
   * @request POST:/api/auth/users/me/view-props/
   * @secure
   */
  updateUserViewProps = (data: TypesViewProps, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/auth/users/me/view-props/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Возвращает информацию о пользователе по его ID
   *
   * @tags Users
   * @name GetUser
   * @summary Пользователи: получение пользователя по ID
   * @request GET:/api/auth/users/{userId}
   * @secure
   */
  getUser = (userId: string, params: RequestParams = {}) =>
    this.request<DtoUserLight, ApierrorsDefinedError>({
      path: `/api/auth/users/${userId}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает таблицу активностей пользователя за указанный период.
   *
   * @tags Users
   * @name GetUserActivitiesTable
   * @summary Пользователи: получение таблицы активностей указанного пользователя
   * @request GET:/api/auth/users/{userId}/activities/table/
   * @secure
   */
  getUserActivitiesTable = (
    userId: string,
    query: {
      /** Начальная дата периода в формате YYYY-MM-DD */
      from: string;
      /** Конечная дата периода в формате YYYY-MM-DD */
      to: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TypesActivityTable, ApierrorsDefinedError>({
      path: `/api/auth/users/${userId}/activities/table/`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Генерирует и возвращает вызов капчи для пользователя
   *
   * @tags Users
   * @name RequestCaptcha
   * @summary Пользователи (управление доступом): запрос капчи для пользователя
   * @request GET:/api/captcha
   */
  requestCaptcha = (params: RequestParams = {}) =>
    this.request<AltchaChallenge, ApierrorsDefinedError>({
      path: `/api/captcha`,
      method: "GET",
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Аутентифицирует пользователя с использованием email и пароля, с проверкой капчи
   *
   * @tags Users
   * @name EmailLogin
   * @summary Пользователи (управление доступом): вход пользователя
   * @request POST:/api/sign-in
   */
  emailLogin = (data: AiplanLoginRequest, params: RequestParams = {}) =>
    this.request<Record<string, any>, ApierrorsDefinedError>({
      path: `/api/sign-in`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Регистрирует нового пользователя по email, проверяет капчу и отправляет временный пароль по email
   *
   * @tags Users
   * @name SignUp
   * @summary Пользователи (управление доступом): регистрация нового пользователя
   * @request POST:/api/sign-up/
   */
  signUp = (data: AiplanEmailCaptchaRequest, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
      path: `/api/sign-up/`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
