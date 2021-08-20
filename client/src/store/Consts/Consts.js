require('dotenv').config()
export const REACT_APP_API = process.env.REACT_APP_API

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export const USER_SIGNIN_REQUEST = "USER_SIGNIN_REQUEST";
export const USER_SIGNIN_SUCCESS = "USER_SIGNIN_SUCCESS";
export const USER_SIGNIN_FAIL = "USER_SIGNIN_FAIL";

export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_LOGOUT_LOC = "USER_LOGOUT_LOC"

export const SIGN_IN_AUTH0 = "SIGN_IN_AUTH0"

export const NEW_ACTIVITY = 'NEW_ACTIVITY'
export const GET_ACTIVITY_REQUEST = 'GET_ACTIVITY_REQUEST'
export const GET_ACTIVITY_SUCCESS = 'GET_ACTIVITY_SUCCESS'
export const GET_ACTIVITY_FAIL = 'GET_ACTIVITY_FAIL'

export const GET_ACTIVITYDETAIL_REQUEST = 'GET_ACTIVITYDETAIL_REQUEST'
export const GET_ACTIVITYDETAIL_SUCCESS = 'GET_ACTIVITYDETAIL_SUCCESS'
export const GET_ACTIVITYDETAIL_FAIL = 'GET_ACTIVITYDETAIL_FAIL'

export const POST_ACTIVITY_REQUEST = "POST_ACTIVITY_REQUEST";
export const POST_ACTIVITY_SUCCESS = "POST_ACTIVITY_SUCCESS";
export const POST_ACTIVITY_FAIL = "POST_ACTIVITY_FAIL";
export const GET_FAVORITE_REQUEST = 'GET_FAVORITE_REQUEST'
export const GET_FAVORITE_SUCCESS = 'GET_FAVORITE_SUCCESS'
export const GET_FAVORITE_FAIL = 'GET_FAVORITE_FAIL'

export const DELETE_FAVORITE_REQUEST = 'DELETE_FAVORITE_REQUEST'
export const DELETE_FAVORITE_SUCCESS = 'DELETE_FAVORITE_SUCCESS'
export const DELETE_FAVORITE_FAIL = 'DELETE_FAVORITE_FAIL'

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
export const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL'