if (!reminderfox)     var reminderfox = {};
if (!reminderfox.core)    reminderfox.core = {};
if (!reminderfox.consts)  reminderfox.consts = {};
if (!reminderfox.network) reminderfox.network = {};

if (!reminderfox.core.method) reminderfox.core.method = "";


// constants
reminderfox.consts.MIGRATED_PREF_VERSION						= "2.1.5b";		// update also install.rdf

// ************************* for offical MOZILLA set to "release"  *****
reminderfox.consts.SPECIAL_VERSION_DETAIL					= "wip";
reminderfox.consts.DROPBOX										= "https://dl.dropbox.com/u/35444930/rmFX/XPI/" 
																			+ reminderfox.consts.SPECIAL_VERSION_DETAIL + "/";


reminderfox.consts.SUPPORT											= "reminderfox@googlegroups.com";

reminderfox.consts.REMINDER_FOX_WELCOME_UPDATE_PAGE_URL	= "http://www.reminderfox.org/update";
reminderfox.consts.REMINDER_FOX_PAGE_URL						= "http://www.reminderfox.org";
reminderfox.consts.REMINDER_FOX_WELCOME_PAGE_URL			= "http://www.reminderfox.org/welcome-to-reminderfox";


//gWCalendar ________________________________________
	reminderfox.core.numDaysEvents = [];
	reminderfox.core.numDaysTodos = [];
	reminderfox.core.lastEvent = null;

	if (!reminderfox.tabInfo) reminderfox.tabInfo = {};
	reminderfox.tabInfo.tabName		= "Reminders";
	reminderfox.tabInfo.tabID			= "Xreminder";		// "xtodo" or "reminderFoxList:{tabName}
	reminderfox.tabInfo.tabIndex			= 0;

	reminderfox.tabInfo.Set= function (tabName, tabID, tabIndex) {
		var tab = document.getElementById("rmFx-allLists");
		if (tabName)	tab.setAttribute("value", tabName);
		if (tabID)		tab.setAttribute("ID", tabID);
		if (tabIndex)	tab.setAttribute("tabListIndex", tabIndex);
	};


reminderfox.consts.PRIORITY_NORMAL = null; // default
reminderfox.consts.PRIORITY_IMPORTANT = 1;

reminderfox.consts.RECURRENCE_ONETIME = null; // default
reminderfox.consts.RECURRENCE_YEARLY = 0;
reminderfox.consts.RECURRENCE_MONTHLY_DATE = 1;
reminderfox.consts.RECURRENCE_MONTHLY_DAY = 3;
reminderfox.consts.RECURRENCE_WEEKLY = 4;
reminderfox.consts.RECURRENCE_YEARLY_DAY = 6;
reminderfox.consts.RECURRENCE_DAILY = 7;

reminderfox.consts.REMIND_UNTIL_COMPLETE_NONE = null; // default
reminderfox.consts.REMIND_UNTIL_COMPLETE_TO_BE_MARKED = 1;
reminderfox.consts.REMIND_UNTIL_COMPLETE_MARKED = 2;

reminderfox.consts.REMINDER_FOX_EXTENDED = "X-REMINDERFOX-";

reminderfox.consts.REMINDERFOX_FILE_LAST_MODIFIED = reminderfox.consts.REMINDER_FOX_EXTENDED + "LAST-MODIFIED";

reminderfox.consts.DOMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];// # of days in Non-Leap year Month
reminderfox.consts.lDOMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // # of days in Leap year Month
// configurable preferences
reminderfox.consts.ENABLE_ALERT_PREF = "enableAlertFor";
reminderfox.consts.ENABLE_ALERT_PREF_NONE = "none";
reminderfox.consts.ENABLE_ALERT_PREF_TODAY = "today";
reminderfox.consts.ENABLE_ALERT_PREF_UPCOMING = "upcoming";
reminderfox.consts.ENABLE_ALERT_PREF_ALL = "all";
reminderfox.consts.SUSPEND_ALERT_PREF = "SUSPENDED:";

reminderfox.consts.ENABLE_CONTEXT_MENUS = "enableContextMenus";
reminderfox.consts.HIDE_FOX_PAW = "hideThatRidiculousFox";
reminderfox.consts.CALENDAR_DAYPOPUP_DELAY = "calendar.daypopup.delay";
reminderfox.consts.SHOW_FILTERS = "defaults.showFilters";
reminderfox.consts.DEFAULTS_ALARM_SNOOZE_TIME = "defaults.alarm.snooze.time";
reminderfox.consts.DEFAULTS_ALARM_SNOOZE_UNITS = "defaults.alarm.snooze.units";
reminderfox.consts.DEFAULTS_ALARM_SNOOZE_ACTION = "defaults.alarm.snooze.action";

reminderfox.consts.MAIL_PATH = "mail.app.location";
reminderfox.consts.MAIL_SENDER = "mail.sender";

reminderfox.consts.ALERT_TIMEOUT_PREF = "alertTimeout";
reminderfox.consts.ALERT_TIMEOUT_DEFAULT = 120; // number of minutes between alerts
reminderfox.consts.HTML_STYLESHEET_PREF = "html.stylesheet";

reminderfox.consts.SHOW_WEEK_NUMS_PREF = "showWeekNumbers";

reminderfox.consts.UPCOMING_REMINDER_DAYS_PREF = "upcomingReminderDays";
reminderfox.consts.UPCOMING_REMINDER_DAYS_DEFAULT = 15;

reminderfox.consts.UPCOMING_REMINDERS_LABEL = "upcomingRemindersLabel";
reminderfox.consts.UPCOMING_REMINDERS_LABEL_DEFAULT = "[longMonth] [date]: [reminderDesc] ([time])";

reminderfox.consts.TODAYS_REMINDERS_LABEL = "todaysRemindersLabel";
reminderfox.consts.TODAYS_REMINDERS_LABEL_DEFAULT = "[reminderDesc] ([time])";

reminderfox.consts.LIST_DATE_LABEL = "listDateLabel";
reminderfox.consts.LIST_DATE_LABEL_DEFAULT = "[longMonth] [date]";

reminderfox.consts.SHOW_STATUS_TEXT = "showReminderStatusText";
reminderfox.consts.SHOW_STATUS_TEXT_DEFAULT = true;

reminderfox.consts.SHOW_REMINDERS_IN_TOOLTIP = "showRemindersInTooltip";
reminderfox.consts.SHOW_REMINDERS_IN_TOOLTIP_DEFAULT = true;

reminderfox.consts.SHOW_TODOS_IN_TOOLTIP = "showTodosInTooltip";
reminderfox.consts.SHOW_TODOS_IN_TOOLTIP_DEFAULT = true;

reminderfox.consts.ALARM_SOUND = "alarmSound";
reminderfox.consts.ALARM_SOUND_DEFAULT = true;

reminderfox.consts.ALERT_SOUND = "alertSound";
reminderfox.consts.ALERT_SOUND_DEFAULT = false;

reminderfox.consts.ALARM_SOUND_PATH = "alarmSoundPath";
reminderfox.consts.ALARM_SOUND_PATH__DEFAULT = "";

reminderfox.consts.USE_24_HOUR_TIME = "use24HourTime";
reminderfox.consts.USE_24_HOUR_TIME_DEFAULT = false;

reminderfox.consts.ALARMS_ENABLED = "alarmsEnabled";
reminderfox.consts.ALARMS_ENABLED_DEFAULT = true;

reminderfox.consts.HIGHLIGHT_TODAYS_REMINDERS = "highlightTodaysReminders";
reminderfox.consts.HIGHLIGHT_TODAYS_REMINDERS_DEFAULT = true;


reminderfox.consts.DEFAULT_TEXTSIZE = "default_TextSize";
reminderfox.consts.DEFAULT_TEXTSIZE_DEFAULT = 14;
reminderfox.consts.DEFAULT_REPEAT = "reminderDefaultRepeat";
reminderfox.consts.DEFAULT_ALARM_TIME = "reminderDefaultAlarmTime";
reminderfox.consts.DEFAULT_ALARM_UNITS = "reminderDefaultAlarmUnits";
reminderfox.consts.DEFAULT_REMIND_UNTIL_COMPLETED = "reminderDefaultRemindUntilCompleted";
reminderfox.consts.DEFAULT_ALL_DAY = "reminderDefaultAllDay";
reminderfox.consts.DEFAULT_CATEGORY = "reminderDefaultCategory";
reminderfox.consts.DEFAULT_SHOW_IN_TOOLTIP = "reminderDefaultShowInTooltip";
reminderfox.consts.DEFAULT_PRINTAGENDA = "printAgenda";
reminderfox.consts.DEFAULT_FILTER_EVENTS = "reminderDefaultFilter";
reminderfox.consts.DEFAULT_FILTER_LISTS = "reminderDefaultFilterLists";
reminderfox.consts.CURRENT_FILTER_EVENTS = "reminderCurrentFilter";
reminderfox.consts.CURRENT_FILTER_LISTS = "reminderCurrentFilterLists";
reminderfox.consts.DEFAULT_MORE = "reminderDefaultMore";
reminderfox.consts.DEFAULT_MORE_DEFAULT_VALUE = "location,url";
reminderfox.consts.CALENDAR_START_DAY = "calendarStartDay";
reminderfox.consts.CALENDAR_START_DAY_DEFAULT = 0;
reminderfox.consts.CALENDAR_SIZE = "calendarSize";
reminderfox.consts.CALENDAR_MONTHS = "calendarMonths";
reminderfox.consts.CALENDAR_MONTHS_DEFAULT = "1";
reminderfox.consts.SMARTFOXY = "smartFoxy";		// 0= none; 1=today's; 2= today's and upcomimg
reminderfox.consts.SMARTFOXY_DEFAULT = "1";
reminderfox.consts.SMARTFOXY_BAR = "smartFoxyBar"; 
reminderfox.consts.SMARTFOXY_BAR_POSITION = "smartFoxyPosition";

reminderfox.consts.ISLEGACY = "isLegacy";
reminderfox.consts.ONHOVER = "calendar.popup.onhover";

reminderfox.consts.ALARM_SOUND_INTERVAL = "alarmSoundInterval";
reminderfox.consts.STATUS_TEXT_MAX_LENGTH = "statusTextMaxLength";

reminderfox.consts.ALARMS_SHOW_IN_TABS = "alarms.showInTabs";

reminderfox.consts.KEY_SHORTCUT_OPEN = "keyboard.shortcut.openReminderFox";
reminderfox.consts.KEY_SHORTCUT_ADD = "keyboard.shortcut.addEvent";

reminderfox.consts.TOOLBAR1 = "statusbarDisplay";
reminderfox.consts.TOOLBAR1_DEFAULT = true;

reminderfox.consts.DEFAULT_EDIT = "defaultEdit";
reminderfox.consts.DEFAULT_EDIT_DEFAULT = "reminders";

// *** old toolbar **
reminderfox.consts.TOOLBAR = "toolbar";
reminderfox.consts.TOOLBAR_DEFAULT = "status-bar";

reminderfox.consts.TOOLBAR_POSITION = "toolbarPosition";
reminderfox.consts.TOOLBAR_POSITION_DEFAULT = -1;


reminderfox.consts.REPEAT_PREVIOUS_OCCURRENCES = "repeatPreviousOccurrences";
reminderfox.consts.REPEAT_UPCOMING_OCCURRENCES = "repeatUpcomingOccurrences";

reminderfox.consts.HIDE_COMPLETED_ITEMS = "hideCompletedItems";

reminderfox.consts.PREF_ALERTSLIDER_MAX_HEIGHT = "alertSliderMaxHeight";
reminderfox.consts.PREF_ALERTSLIDER_OPEN_TIME = "alertOpenTime";


reminderfox.consts.MIGRATED_PREF = "migrated";
reminderfox.consts.SHOW_WELCOME_PAGE = "showWelcomePage";

reminderfox.consts.TODO_LISTS = "todoLists";

reminderfox.consts.SUBSCRIPTIONS = "subscriptions";

reminderfox.consts.SORT_COLUMNS_PREF = "sortColumns";

reminderfox.consts.REMINDER_FOX_PREF = "extensions.reminderFox";

reminderfox.consts.DEFAULT_TODOS_CATEGORY = "Xtodo";
reminderfox.consts.DEFAULT_REMINDERS_CATEGORY = "Xreminder";

reminderfox.consts.QUICK_ALARMS = "quickAlarms";


// network
reminderfox.consts.NETWORK_SYNCHRONIZE = "network.synchronize";
reminderfox.consts.NETWORK_SYNCHRONIZE_DEFAULT = false;
reminderfox.consts.PROTO = "network.protocol";
reminderfox.consts.DEFAULT_PROTO = "ftp";
reminderfox.consts.ADDRESS = "network.address";
reminderfox.consts.USERNAME = "network.username";

reminderfox.consts.UI_MODE_HEADLESS_SHOW_ALL_UI = 0;
reminderfox.consts.UI_MODE_HEADLESS = 1;
reminderfox.consts.UI_MODE_HEADLESS_SHOW_ERRORS = 2;

// categories
reminderfox.consts.CATEGORIES = "categories";

// old reminder/todo strings for migration purposes
reminderfox.consts.REMINDERS = "reminderFox.reminders";
reminderfox.consts.TODOS = "reminderFox.todos";

reminderfox.consts.STORE_FILE = "storeFile";

reminderfox.consts.DEBUG = "debug";
reminderfox.consts.LOG = reminderfox.consts.DEBUG + "." + "loglevel";
reminderfox.consts.LOG_FILE = reminderfox.consts.DEBUG + "." + "file";
reminderfox.consts.LOG_LEVEL_NONE = 0;
reminderfox.consts.LOG_LEVEL_INFO = 1;
reminderfox.consts.LOG_LEVEL_FINE = 2;
reminderfox.consts.LOG_LEVEL_SUPER_FINE = 3;
reminderfox.consts.LOG_LEVEL_DEBUG = 4;
reminderfox.consts.LOG_DEFAULT = reminderfox.consts.LOG_LEVEL_NONE;
reminderfox.consts.LAST_UPDATE = "lastUpdate";
reminderfox.consts.LAST_ALERT = "lastAlert";
reminderfox.consts.LAST_PROCESSED = "lastProcessed";
reminderfox.consts.LAST_MODIFIED = "lastModified";

// images
reminderfox.consts.NOTES_IMAGE = "chrome://reminderfox/skin/images/notes.png";
reminderfox.consts.MAIL_IMAGE = "chrome://reminderfox/skin/images/mail.png";
reminderfox.consts.SHARE = "chrome://reminderfox/skin/images/icon_share_20.png";
reminderfox.consts.SHAREW = "chrome://reminderfox/skin/images/icon_share_20w.png";
reminderfox.consts.SHARE16 = "chrome://reminderfox/skin/images/icon_share_16.png";

reminderfox.consts.REMIND_UNTIL_COMPLETED_TO_BE_MARKED_IMAGE = "chrome://reminderfox/skin/images/ribbon-blue-small.png";
reminderfox.consts.REMIND_UNTIL_COMPLETED_IMAGE = "chrome://reminderfox/skin/images/ribbon-red-small.png";
reminderfox.consts.COMPLETED_IMAGE = "chrome://global/skin/checkbox/cbox-check.gif";
reminderfox.consts.COMPLETED_TODO_IMAGE = "chrome://global/skin/checkbox/cbox-check.gif";
reminderfox.consts.SHOW_IN_TOOLTIP_IMAGE = "chrome://reminderfox/skin/images/tooltip.png";
reminderfox.consts.ALARM_IMAGE = "chrome://reminderfox/skin/images/alarmbell.png";
reminderfox.consts.ALARM_SNOOZE_IMAGE = "chrome://reminderfox/skin/images/alarmbellSnooze.png";

//calDAV HTTP
reminderfox.consts.CALDAV_IMAGE = "chrome://reminderfox/skin/images/fruux16.png";
reminderfox.consts.CALDAV_DEFAULT_ACCOUNT = 'defaultSyncAccount';
reminderfox.consts.CALDAV_SATURATION = 'calDAVcolorSaturation';
reminderfox.consts.CALDAV_SATURATION_DEFAULT =30;

// sorting order
reminderfox.consts.SORT_DIRECTION_ASCENDING = 0;
reminderfox.consts.SORT_DIRECTION_DESCENDING = 1;

// The number of milliseconds in one day
reminderfox.consts.ONE_DAY = 1000 * 60 * 60 * 24;
reminderfox.consts.NEGATIVE_ONE_DAY = reminderfox.consts.ONE_DAY * -1;
reminderfox.consts.TWO_DAYS = reminderfox.consts.ONE_DAY * 2;

reminderfox.consts.nsISupportsString = Components.interfaces.nsISupportsString;
reminderfox.consts.consoleService = Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);

reminderfox.consts.weekday = new Array("SU", "MO", "TU", "WE", "TH", "FR", "SA");


// prefs setup
reminderfox._prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
reminderfox._prefsBranch = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch(reminderfox.consts.REMINDER_FOX_PREF + ".");

reminderfox._prefsTYPE = {
	BOOL: 0,
	INT: 1,
	CHAR: 2,
	COMPLEX: 3
};
reminderfox._prefsUser = null;

// GLOBAL VARS

// Flag for showing legacy layout
reminderfox.core.isLegacy = false;
reminderfox.core.agenda = false;

reminderfox.core.remindersModified = false;

reminderfox.core.checkModified= function (){
	var topWindow = reminderfox.util.getWindow("window:reminderFoxEdit");

	var text = reminderfox.string("rf.userio.fileImport.disabled");

	if (topWindow) {
		if (topWindow.reminderfox.core.remindersModified) {
			var statusText = document.getElementById("reminderFox-status-text");
			if (statusText) { // if the XUL has a status-text line, use it
				document.getElementById("reminderFox-status-text").textContent = text;
				document.getElementById("reminderFox-status").removeAttribute("hidden");
			}
			reminderfox.core.statusSet(text);
			return true;
		}
	}
	return false;
};


reminderfox.core.reminderFoxEvents = null;
reminderfox.core.reminderFoxTodosArray = null; // ToDo's, Movies, Albums
reminderfox.core.reminderFox_lastModifiedTime = null;
reminderfox.core.reminderFox_timezones = {};
reminderfox.core.reminderFox_reminderFoxExtraInfo = null;
reminderfox.core.reminderFoxExtraInfoPrefix = null;


reminderfox.string= function(bString){
	try {
		return document.getElementById("reminderFox-bundle").getString(bString);
	} catch (e) {
		reminderfox.util.Logger('Alert', "String bundle error : " + bString + "\n" + e);
		return bString;
	}
};


reminderfox.core.initUserPrefsArray= function(){
	reminderfox._prefsUser = {};

	reminderfox._prefsUser[reminderfox.consts.ENABLE_ALERT_PREF] = reminderfox._prefsTYPE.CHAR;
	reminderfox._prefsUser[reminderfox.consts.SHOW_STATUS_TEXT] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.USE_24_HOUR_TIME] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.HIGHLIGHT_TODAYS_REMINDERS] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.HIDE_COMPLETED_ITEMS] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.SHOW_REMINDERS_IN_TOOLTIP] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.SHOW_TODOS_IN_TOOLTIP] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.ENABLE_CONTEXT_MENUS] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.HIDE_FOX_PAW] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.UPCOMING_REMINDER_DAYS_PREF] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.DEFAULT_EDIT] = reminderfox._prefsTYPE.CHAR;
	reminderfox._prefsUser[reminderfox.consts.ALERT_TIMEOUT_PREF] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.UPCOMING_REMINDERS_LABEL] = reminderfox._prefsTYPE.COMPLEX;
	reminderfox._prefsUser[reminderfox.consts.TODAYS_REMINDERS_LABEL] = reminderfox._prefsTYPE.COMPLEX;
	reminderfox._prefsUser[reminderfox.consts.LIST_DATE_LABEL] = reminderfox._prefsTYPE.COMPLEX;
	reminderfox._prefsUser[reminderfox.consts.ALARM_SOUND] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.ALERT_SOUND] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.CALENDAR_START_DAY] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.SHOW_WEEK_NUMS_PREF] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.CALENDAR_SIZE] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.ALARM_SOUND_INTERVAL] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.STATUS_TEXT_MAX_LENGTH] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.DEFAULTS_ALARM_SNOOZE_TIME] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.DEFAULTS_ALARM_SNOOZE_UNITS] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.DEFAULTS_ALARM_SNOOZE_ACTION] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.STORE_FILE] = reminderfox._prefsTYPE.CHAR;
	reminderfox._prefsUser[reminderfox.consts.NETWORK_SYNCHRONIZE] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.ALARMS_SHOW_IN_TABS] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.SHOW_FILTERS] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.SHOW_WEEK_NUMS_PREF] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.REPEAT_UPCOMING_OCCURRENCES] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.REPEAT_PREVIOUS_OCCURRENCES] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.PREF_ALERTSLIDER_MAX_HEIGHT] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.PREF_ALERTSLIDER_OPEN_TIME] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.ALARM_SOUND_PATH] = reminderfox._prefsTYPE.CHAR;
	reminderfox._prefsUser[reminderfox.consts.KEY_SHORTCUT_OPEN] = reminderfox._prefsTYPE.CHAR;
	reminderfox._prefsUser[reminderfox.consts.KEY_SHORTCUT_ADD] = reminderfox._prefsTYPE.CHAR;
	reminderfox._prefsUser[reminderfox.consts.DEFAULT_ALL_DAY] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.DEFAULT_REPEAT] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.DEFAULT_MORE] = reminderfox._prefsTYPE.CHAR;
	reminderfox._prefsUser[reminderfox.consts.DEFAULT_ALARM_TIME] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.DEFAULT_ALARM_UNITS] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.DEFAULT_REMIND_UNTIL_COMPLETED] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.PROTO] = reminderfox._prefsTYPE.CHAR;
	reminderfox._prefsUser[reminderfox.consts.ADDRESS] = reminderfox._prefsTYPE.CHAR;
	reminderfox._prefsUser[reminderfox.consts.USERNAME] = reminderfox._prefsTYPE.CHAR;

	reminderfox._prefsUser[reminderfox.consts.HTML_STYLESHEET_PREF] = reminderfox._prefsTYPE.CHAR;
	reminderfox._prefsUser[reminderfox.consts.TODO_LISTS] = reminderfox._prefsTYPE.COMPLEX;
	reminderfox._prefsUser[reminderfox.consts.SUBSCRIPTIONS] = reminderfox._prefsTYPE.COMPLEX;
	reminderfox._prefsUser[reminderfox.consts.CATEGORIES] = reminderfox._prefsTYPE.COMPLEX;

	reminderfox._prefsUser[reminderfox.consts.TOOLBAR] = reminderfox._prefsTYPE.CHAR;
	reminderfox._prefsUser[reminderfox.consts.TOOLBAR_POSITION] = reminderfox._prefsTYPE.INT;

	reminderfox._prefsUser[reminderfox.consts.TOOLBAR1] = reminderfox._prefsTYPE.BOOL;

	reminderfox._prefsUser[reminderfox.consts.DEFAULT_SHOW_IN_TOOLTIP] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.DEFAULT_PRINTAGENDA] = reminderfox._prefsTYPE.BOOL;
	reminderfox._prefsUser[reminderfox.consts.DEFAULT_FILTER_EVENTS] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.DEFAULT_FILTER_LISTS] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.CURRENT_FILTER_EVENTS] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.CURRENT_FILTER_LISTS] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.DEFAULT_CATEGORY] = reminderfox._prefsTYPE.COMPLEX;
	reminderfox._prefsUser[reminderfox.consts.SORT_COLUMNS_PREF] = reminderfox._prefsTYPE.COMPLEX;

	reminderfox._prefsUser[reminderfox.consts.CALENDAR_MONTHS] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.DEFAULT_TEXTSIZE] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.CALENDAR_DAYPOPUP_DELAY] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.SMARTFOXY] = reminderfox._prefsTYPE.INT;
	reminderfox._prefsUser[reminderfox.consts.SMARTFOXY_BAR] = reminderfox._prefsTYPE.CHAR;
	reminderfox._prefsUser[reminderfox.consts.SMARTFOXY_BAR_POSITION] = reminderfox._prefsTYPE.INT;


	reminderfox._prefsUser[reminderfox.consts.ISLEGACY] = reminderfox._prefsTYPE.BOOL;

	reminderfox._prefsUser[reminderfox.consts.ONHOVER] = reminderfox._prefsTYPE.BOOL;

	reminderfox._prefsUser[reminderfox.consts.CALDAV_DEFAULT_ACCOUNT] = reminderfox._prefsTYPE.COMPLEX;
	reminderfox._prefsUser[reminderfox.consts.CALDAV_SATURATION] = reminderfox._prefsTYPE.INT;
	
	reminderfox._prefsUser[reminderfox.consts.QUICK_ALARMS] = reminderfox._prefsTYPE.COMPLEX;
};


reminderfox.core.getPreferenceValue= function(preferenceName, defaultValue){
	if (reminderfox._prefsUser == null) {
		reminderfox.core.initUserPrefsArray();
	}
	var prefValue = null;
	try {
		var prefType = reminderfox._prefsUser[preferenceName];
		if (prefType == reminderfox._prefsTYPE.COMPLEX) {
			prefValue = reminderfox._prefsBranch.getComplexValue((preferenceName), reminderfox.consts.nsISupportsString).data;
		}
		else
			if (prefType == reminderfox._prefsTYPE.CHAR) {
				prefValue = reminderfox._prefsBranch.getCharPref(preferenceName);
			}
			else
				if (prefType == reminderfox._prefsTYPE.BOOL) {
					prefValue = reminderfox._prefsBranch.getBoolPref(preferenceName);
				}
				else
					if (prefType == reminderfox._prefsTYPE.INT) {
						prefValue = reminderfox._prefsBranch.getIntPref(preferenceName);
					}
	}
	catch (e) {
		prefValue = defaultValue; // if no existing value, use the default value
	}
	if (prefValue == null)
		prefValue = defaultValue; //gWprefs 2009-06-04
	return prefValue;
};


reminderfox.core.setPreferenceValue= function(preferenceName, preferenceValue){
	if (!reminderfox._prefsUser) {
		reminderfox.core.initUserPrefsArray();
	}
	try {
		var prefType = reminderfox._prefsUser[preferenceName];
		if (prefType == reminderfox._prefsTYPE.COMPLEX) {
			reminderfox.core.setUnicodePref(preferenceName, preferenceValue);
		}
		else
			if (prefType == reminderfox._prefsTYPE.CHAR) {
				reminderfox._prefsBranch.setCharPref(preferenceName, preferenceValue);
			}
			else
				if (prefType == reminderfox._prefsTYPE.BOOL) {
					if (preferenceValue == "true" || preferenceValue === true) {
						reminderfox._prefsBranch.setBoolPref(preferenceName, true);
					}
					else {
						reminderfox._prefsBranch.setBoolPref(preferenceName, false);
					}
				}
				else
					if (prefType == reminderfox._prefsTYPE.INT) {
						reminderfox._prefsBranch.setIntPref(preferenceName, parseInt(preferenceValue, 10));
					}
	}
	catch (e) {
		reminderfox.util.Logger('Alert',"Exception setting Perference: " + preferenceName + " == " + preferenceValue);
	}
};


/**
 * Get unicode string value from preference store
 * @param {string} preference name
 **/
reminderfox.core.getUnicodePref= function(prefName){
	return reminderfox._prefsBranch.getComplexValue(prefName, reminderfox.consts.nsISupportsString).data;
};


/** 
 * set unicode string value 
 * */
reminderfox.core.setUnicodePref= function(prefName, prefValue){
	var sString = Components.classes["@mozilla.org/supports-string;1"].createInstance(reminderfox.consts.nsISupportsString);
	sString.data = prefValue;
	reminderfox._prefsBranch.setComplexValue(prefName, reminderfox.consts.nsISupportsString, sString);
};



reminderfox.core.logMessageLevel= function(logString, level){
	var logLevel = reminderfox._prefsBranch.getIntPref(reminderfox.consts.LOG);
	if (level <= logLevel) {
		if (reminderfox.consts.consoleService) {
			reminderfox.consts.consoleService.logStringMessage("reminderFox: " + logString);
			if (logLevel >= 2) {
				dump("reminderFox: " + logString + "\n");
			}
		}
	}

	// if the user has specified a log file, then write out log messages to file
	var logFile = reminderfox._prefsBranch.getCharPref(reminderfox.consts.LOG_FILE);
	if (logFile && logFile.length > 0) {

		// uncomment this if you want to only output DEBUG messages only; useful if sending a direct
		// xpi to a user filled with specific DEBUG-level statements
		// dump: nls - this should be commented out for final release
		//if ( level != reminderfox.consts.LOG_LEVEL_DEBUG ) {
		//	return;
		//}

		// if the user has set to DEBUG; only output debug lines to file
		if (logLevel == reminderfox.consts.LOG_LEVEL_DEBUG && level != logLevel) {
			return;
		}

		// log it to file
		try {
			var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsIFile);
			file.initWithPath(logFile);

			if (file) {
				if (!file.exists()) {
					file.create(Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420);
				}
				reminderfox.core.appendStringToFile("LogLevel " + level + ": " + logString + "\n---------------\n", file, true);
			}
		}
		catch (e) {
			if (reminderfox.consts.consoleService) {
				reminderfox.consts.consoleService.logStringMessage("ReminderFox: Failed writing debug file: " +
				e.name +
				": " +
				e.description +
				": " +
				e.fileName +
				": " +
				e.lineNumber +
				": " +
				e.message +
				"\n" +
				e.stack);
				dump("ReminderFox: Failed writing debug file: " +
				e.name +
				": " +
				e.description +
				": " +
				e.fileName +
				": " +
				e.lineNumber +
				": " +
				e.message +
				"\n" +
				e.stack);
			}
		}
	}
};


reminderfox.core.debug_printStack= function(){
	var errno = errno;
	var fileName = Components.stack.caller.filename;
	var lineNumber = Components.stack.caller.lineNumber;
	var functionName = Components.stack.caller.name;


	var frame = Components.stack.caller;
	var str = "";
	while (frame) {
		var name = frame.functionName ? frame.functionName : "[anonymous]";

		if (frame.filename)
			str += frame.filename + ", Line " + frame.lineNumber;
		else
			str += "[" + gConsoleBundle.getString("noFile") + "]";

		str += " --> ";

		if (frame.functionName)
			str += frame.functionName;
		else
			str += "[" + gConsoleBundle.getString("noFunction") + "]";

		str += "\n";
		frame = frame.caller;
	}
	dump(str + "\n");
};


// Object representing reminder events
reminderfox.core.ReminderFoxEvent= function(reminderId, reminderDate, reminderSummary){
	this.id = reminderId;
	this.summary = reminderSummary; // text of reminder

	this.allDayEvent = true;		// moved before 'date' items for xmlPrinting
	this.durationTime = null;

	this.date = reminderDate; // date object for reminder (using current year)
	this.endDate = null;
	this.priority = null;
	this.categories = null;
	this.notes = null;

	this.recurrence = {
		type: null,
		endDate: null,
		interval: null,
		byDay: null,
		count: null
	}; // byday = "MO,TU,WE..."

	this.alarm = null;
	this.alarmLastAcknowledge = null;
	this.lastModified = null;
	this.completedDate = null;
	this.messageID = null;
	this.snoozeTime = null;
	this.url = null;
	this.location = null;

	this.extraInfo = null;
	this.remindUntilCompleted = null;
};


// Object representing ToDos
reminderfox.core.ReminderFoxTodo= function(todoId, todoSummary, todoDate){
	this.id = todoId;
	this.summary = todoSummary;

	this.allDayEvent = true;		// moved before 'date' items for xmlPrinting
	this.durationTime = null;

	this.date = todoDate; // date object for reminder (using current year)
	this.endDate = null;
	this.priority = null;
	this.categories = null;
	this.notes = null;

	this.recurrence = {
		type: null,
		endDate: null,
		interval: null,
		byDay: null,
		count: null
	};

	this.alarm = null;
	this.alarmLastAcknowledge = null;
	this.lastModified = null;
	this.completedDate = null;
	this.messageID = null;
	this.snoozeTime = null;
	this.url = null;
	this.location = null;

	this.extraInfo = null;
	this.showInTooltip = false;
};

reminderfox.core.ReminderFoxQuickAlarm= function(qa_text, qa_notes, qa_alarmTime, qa_snoozeTime){
	this.text = qa_text;
	this.alarmTime = qa_alarmTime;
	this.snoozeTime = qa_snoozeTime;
	this.notes = qa_notes;
};


// convenience function for dump debug; comment out
//function dd( str ) {
//	dump( str + "\n" );
//}


/*
 * make a clone object of an event - useful if you want to temporarily modify some properties of an event,
 * but don't want to change the actual model
 */
reminderfox.core.cloneReminderFoxEvent= function(reminderFoxEvent){
	var newDate = new Date(reminderFoxEvent.date.getTime());
	var newReminderFoxEvent = new reminderfox.core.ReminderFoxEvent(reminderFoxEvent.id, newDate, reminderFoxEvent.summary);

	if (reminderFoxEvent.lastModified) {
		newReminderFoxEvent.lastModified = reminderFoxEvent.lastModified;
	}
	newReminderFoxEvent.notes = reminderFoxEvent.notes;
	newReminderFoxEvent.recurrence = {
		type: reminderFoxEvent.recurrence.type,
		endDate: reminderFoxEvent.recurrence.endDate,
		interval: reminderFoxEvent.recurrence.interval,
		byDay: reminderFoxEvent.recurrence.byDay,
		count: reminderFoxEvent.recurrence.count
	};
	newReminderFoxEvent.priority = reminderFoxEvent.priority;

	newReminderFoxEvent.completedDate = reminderFoxEvent.completedDate;
	newReminderFoxEvent.categories = reminderFoxEvent.categories;
	newReminderFoxEvent.allDayEvent = reminderFoxEvent.allDayEvent;
	newReminderFoxEvent.alarm = reminderFoxEvent.alarm;
	newReminderFoxEvent.alarmLastAcknowledge = reminderFoxEvent.alarmLastAcknowledge;
	newReminderFoxEvent.messageID = reminderFoxEvent.messageID;

//gWcalDAV
	newReminderFoxEvent.calDAVid = reminderFoxEvent.calDAVid;

	newReminderFoxEvent.extraInfo = reminderFoxEvent.extraInfo;
	newReminderFoxEvent.snoozeTime = reminderFoxEvent.snoozeTime;

	newReminderFoxEvent.location = reminderFoxEvent.location;
	newReminderFoxEvent.url = reminderFoxEvent.url;

	if (reminderFoxEvent.endDate) {
		newReminderFoxEvent.endDate = new Date(reminderFoxEvent.endDate.getTime());
	newReminderFoxEvent.durationTime = reminderFoxEvent.durationTime;
	}

	newReminderFoxEvent.remindUntilCompleted = reminderFoxEvent.remindUntilCompleted;

	//gWCalndr  we need to save the orignal dates and Summary
	if (reminderFoxEvent.orgStartDate) {
		newReminderFoxEvent.orgStartDate = new Date(reminderFoxEvent.orgStartDate.getTime());
	}
	if (reminderFoxEvent.orgEndDate) {
		newReminderFoxEvent.orgEndDate = new Date(reminderFoxEvent.orgEndDate.getTime());
	}
	if (reminderFoxEvent.orgSummary) {
		newReminderFoxEvent.orgSummary = reminderFoxEvent.orgSummary;
	}
	if (reminderFoxEvent.instanceDate) {
		newReminderFoxEvent.instanceDate = reminderFoxEvent.instanceDate;
	}

	//gWEditing  //gWXXX try to clone todo items
	if (reminderFoxEvent.showInTooltip) {
		newReminderFoxEvent.showInTooltip = reminderFoxEvent.showInTooltip;
	}
	return newReminderFoxEvent;
};


/*
 * make a clone object of an event - useful if you want to temporarily modify some properties of an event,
 * but don't want to change the actual model
 */
reminderfox.core.cloneReminderFoxTodo= function(reminderFoxTodo){

	var newDate;
	if (reminderFoxTodo.date) {
		newDate = new Date(reminderFoxTodo.date.getTime());
	}
	var newReminderFoxTodo = new reminderfox.core.ReminderFoxTodo(reminderFoxTodo.id, reminderFoxTodo.summary, newDate);

	if (reminderFoxTodo.lastModified) {
		newReminderFoxTodo.lastModified = reminderFoxTodo.lastModified;
	}
	newReminderFoxTodo.notes = reminderFoxTodo.notes;
	newReminderFoxTodo.recurrence = {
		type: reminderFoxTodo.recurrence.type,
		endDate: reminderFoxTodo.recurrence.endDate,
		interval: reminderFoxTodo.recurrence.interval,
		byDay: reminderFoxTodo.recurrence.byDay,
		count: reminderFoxTodo.recurrence.count
	};

	newReminderFoxTodo.priority = reminderFoxTodo.priority;

	newReminderFoxTodo.completedDate = reminderFoxTodo.completedDate;
	newReminderFoxTodo.categories = reminderFoxTodo.categories;
	newReminderFoxTodo.allDayEvent = reminderFoxTodo.allDayEvent;
	newReminderFoxTodo.alarm = reminderFoxTodo.alarm;
	newReminderFoxTodo.alarmLastAcknowledge = reminderFoxTodo.alarmLastAcknowledge;
	newReminderFoxTodo.messageID = reminderFoxTodo.messageID;

//gWcalDAV
	newReminderFoxTodo.calDAVid = reminderFoxTodo.calDAVid;

	newReminderFoxTodo.extraInfo = reminderFoxTodo.extraInfo;
	newReminderFoxTodo.snoozeTime = reminderFoxTodo.snoozeTime;

	newReminderFoxTodo.location = reminderFoxTodo.location;
	newReminderFoxTodo.url = reminderFoxTodo.url;

	if (reminderFoxTodo.endDate) {
		newReminderFoxTodo.endDate = new Date(reminderFoxTodo.endDate.getTime());
	}
	newReminderFoxTodo.durationTime = reminderFoxTodo.durationTime;

	newReminderFoxTodo.showInTooltip = reminderFoxTodo.showInTooltip;


	//gWCalndr  we need to save the orignal dates and Summary
	if (reminderFoxTodo.orgStartDate) {
		newReminderFoxTodo.orgStartDate = new Date(reminderFoxTodo.orgStartDate.getTime());
	}
	if (reminderFoxTodo.orgEndDate) {
		newReminderFoxTodo.orgEndDate = new Date(reminderFoxTodo.orgEndDate.getTime());
	}
	if (reminderFoxTodo.orgSummary) {
		newReminderFoxTodo.orgSummary = reminderFoxTodo.orgSummary;
	}

	if (reminderFoxTodo['X-listID']) {
		newReminderFoxTodo['X-listID'] = reminderFoxTodo['X-listID'];
	}
	return newReminderFoxTodo;
};


reminderfox.core.isMailEvent= function(event){
	return event.messageID || reminderfox.core.isGMailEvent(event);
};


reminderfox.core.isGMailEvent= function(event){
	return event.url &&
	(	//event.url.indexOf( "/mail/?shva" ) != -1;
	event.url.indexOf("mail.google") != -1 ||
	event.url.indexOf("mail.live") != -1 ||
	event.url.indexOf(".mail.") != -1); // handle windows live, etc
};


reminderfox.core.focusBrowser= function(){
	if ("@mozilla.org/messenger;1" in Components.classes) {
	}
	else {
		var navWindow;

		// Try to get the most recently used browser window
		try {
			var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
			navWindow = wm.getMostRecentWindow("navigator:browser");
		}
		catch (ex) {
		}

		if (navWindow) { // Open the URL in most recently used browser window
			navWindow.focus();
		}
		else { // If there is no recently used browser window open new browser window with the URL
			var ass = Components.classes["@mozilla.org/appshell/appShellService;1"].getService(Components.interfaces.nsIAppShellService);
			var win = ass.hiddenDOMWindow;
			win.focus();
		}
	}
};


reminderfox.core.networkSynchronizeCallback= function(){
	reminderfox.util.JS.dispatch('network');
	reminderfox.network.upload.reminderFox_upload_Startup_headless(reminderfox.consts.UI_MODE_HEADLESS_SHOW_ERRORS /* =2 */);
};


reminderfox.core.launchWelcomePage= function(isNew){
	try {
		function welcome(version, isNew){
			try {
				var browser = top.getBrowser();
				var pageURL = reminderfox.consts.REMINDER_FOX_WELCOME_UPDATE_PAGE_URL;
				if (!isNew && version) {
					pageURL = reminderfox.consts.REMINDER_FOX_WELCOME_UPDATE_PAGE_URL;
				}
				browser.selectedTab = browser.addTab(pageURL + "?version=" + version);
			}
			catch (e) {
			}
		}
		var showWelcomePage = reminderfox._prefsBranch.getBoolPref(reminderfox.consts.SHOW_WELCOME_PAGE);
		if (showWelcomePage) {
			setTimeout(welcome, 100, reminderfox.consts.MIGRATED_PREF_VERSION, isNew);
		}
	}
	catch (e) {
	}
};


reminderfox.core.loadDefaultPreferences= function(){
	try {
		var oldVersionNumber = reminderfox._prefsBranch.getCharPref(reminderfox.consts.MIGRATED_PREF);

		if (oldVersionNumber != reminderfox.consts.MIGRATED_PREF_VERSION) {
			if (!oldVersionNumber || oldVersionNumber === "") {
				// this pref is not set; this is new installation...
				// handle any new work here
				reminderfox.core.firstStart();
				reminderfox.core.launchWelcomePage(true);
			}
			else {
				reminderfox.core.launchWelcomePage(false);

				reminderfox.core.handleMigration(oldVersionNumber);
				
				//	Firefox 4 disables the addon-bar (status-bar) by default, meaning that new users will have
				// a poor first experience.  So on first install/update on FF4, let's just make sure the
				// addon-bar is shown
				reminderfox.overlay.switchStatusAddonBar();
			}
			// set version number to new current version
			try {
				reminderfox._prefsBranch.setCharPref(reminderfox.consts.MIGRATED_PREF, reminderfox.consts.MIGRATED_PREF_VERSION);
			}
			catch (e) {
			}
		}
	}
	catch (e) {
		// this is an older version; we need to handle migration code
		reminderfox.core.handleMigration("0.0");
	}

	//    Use AddManager to get extension details (needs Gecko 2)
/*---    obsolete call since Gecko 2 --   see AddOn Manager

var em = Components.classes["@mozilla.org/extensions/manager;1"]
				.getService(Components.interfaces.nsIExtensionManager);
var addon = em.getItemForID("{ada4b710-8346-4b82-8199-5de2b400a6ae}");
alert("ReminderFox version: " + addon.version);
---- */

	var statusbarDisplay = reminderfox.core.getPreferenceValue(reminderfox.consts.TOOLBAR1, reminderfox.consts.TOOLBAR1_DEFAULT);
	document.getElementById("reminderFox-statusLabel").setAttribute("hidden", statusbarDisplay);

	try {
		// clear out last alert time - because we always want to show the alert slider at least once on startup
		reminderfox._prefsBranch.setCharPref(reminderfox.consts.LAST_ALERT, "");
	}
	catch (e) {
	}

	try {
		reminderfox._prefsBranch.getCharPref(reminderfox.consts.LAST_MODIFIED);
	}
	catch (e) {
		reminderfox._prefsBranch.setCharPref(reminderfox.consts.LAST_MODIFIED, "");
	}

	// set default categories if none are present
	var categories = "";
	try {
		categories = reminderfox.core.getPreferenceValue(reminderfox.consts.CATEGORIES);
	}
	catch (e) {
		categories = "";
	}
	if (categories === "") {
		var defaultCategories = reminderfox.string("rf.categories.initial.defaults");
		reminderfox.core.setUnicodePref(reminderfox.consts.CATEGORIES, defaultCategories);
	}

	// clear out debug file if it's there (just overwrite with a new header)
	var logFile = reminderfox._prefsBranch.getCharPref(reminderfox.consts.LOG_FILE);
	if (logFile && logFile.length > 0) {
		// log it to file
		var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsIFile);
		file.initWithPath(logFile);

		if (file) {
			var msg = reminderfox.aboutXPI()
				+ "\n  ------------------------------------------------\n\n";
			reminderfox.core.writeStringToFile(msg, file, false);
		}
	}
};


/**
 *   'Default Views' -- Set and Info
 */
reminderfox.core.migrate_defaultView= function(mode){
	//gWDefaultViews
	// extensions.reminderFox.views backup Mail/Send=<SUMMARY:Mail,Send;DATE:-1Y,3M;>,lastYear=<DATE:-1Y;>,
	if ('Info' == mode) { //
		//alert("Info about 'Default View' set -- how to handle etc .. ");
		return;
	}

	if ('Set' == mode) { // read the 'views.default' set and add 'view's on it
		// to the 'views' set; for checking use name only,
		// don't change any exsisting 'view' definition

		var views = null;
		try { // read 'views'
			views = reminderfox.core.getUnicodePref("views");
		}
		catch (ex) {
		}

		var defaultViews = "";
		var i = 0;
		try {
			while (reminderfox.string("rf.views.default.label." + i) != ("rf.views.default.label." + i)) {
				defaultViews += reminderfox.string("rf.views.default.label." + i) +
				"=<" +
				reminderfox.string("rf.views.default.value." + i) +
				">,";
				i++;
			}
		} catch (ex) {
		}
		if ((!views) || (views === "")) {
			views = defaultViews;
		}
		else {
			var cViews = views;
			var defViewsArray = defaultViews.split(";>,");
			var defCount = defViewsArray.length;

			if (defCount > 0) {
				while (defCount--) {
					var defLabel = defViewsArray[defCount].split("=<")[0];
					var defValue = defViewsArray[defCount].split("=<")[1];

					var isView = true;
					if (cViews.length > 0) {
						var cViewsArray = cViews.split(";>,");
						var cCount = cViewsArray.length;
						while (cCount--) {
							var cLabel = cViewsArray[cCount].split("=<")[0]; // ex: FoxInfo=<DATE:TODAY;>,
							if ((defLabel === "") || (cLabel == defLabel)) {
								isView = false;
							}
						}
					}
					if ((isView) && (defLabel !== "")) {
						views += defLabel + "=<" + defValue + ";>,";
					}
				} // while ( dCount -- )
			}
		}
		reminderfox.core.setUnicodePref("views", views);
		// reload the 'views' if the View Editor is open
		try {
			reminderfox.view.ManageLoad();
		}
		catch (ex) {
		}
	}
};


reminderfox.core.handleMigration= function(oldVersion){
	// this is an older version; we need to handle migration code
	if (oldVersion < "1.9.8") {
		// Migrate old quick alarms

		var quickAlarms = reminderfox.core.getUnicodePref(reminderfox.consts.QUICK_ALARMS);
		if (quickAlarms && quickAlarms.length > 0) {
			var beginIndex = quickAlarms.indexOf("X-REMINDERFOX-VALARM:");
			if (beginIndex != -1) {
				var quickAlarmArray = new Array();
				if (quickAlarms && quickAlarms.length > 0) {
					var currentAlarms = quickAlarms;
					beginIndex = currentAlarms.indexOf("X-REMINDERFOX-VALARM:");
					while (currentAlarms.length > 0 && beginIndex != -1) {
						var snoozeIndex = currentAlarms.indexOf("X-REMINDERFOX-SNOOZE:");
						var endTextIndex = snoozeIndex;
						var notesText = null;
						// check for notes
						var notesIndex = currentAlarms.indexOf("X-REMINDERFOX-NOTES:");
						if (notesIndex != -1 && notesIndex < snoozeIndex) {
							notesText = currentAlarms.substring(notesIndex + "X-REMINDERFOX-NOTES:".length, snoozeIndex);
							endTextIndex = notesIndex;
						}


						beginIndex = currentAlarms.indexOf("X-REMINDERFOX-VALARM:");
						var alarmText = currentAlarms.substring(beginIndex + "X-REMINDERFOX-VALARM:".length, endTextIndex);

						if (snoozeIndex != -1) {
							var snoozeTimeIndex = currentAlarms.indexOf(";PT", snoozeIndex);
							if (snoozeTimeIndex != -1) {
								var alarmTime = currentAlarms.substring(snoozeIndex + "X-REMINDERFOX-SNOOZE:".length, snoozeTimeIndex);
								var snoozeEndIndex = currentAlarms.indexOf("M", snoozeTimeIndex);
								if (snoozeEndIndex != -1) {
									var snoozeTime = currentAlarms.substring((snoozeTimeIndex + ";PT".length), snoozeEndIndex);

									var currentTime = new Date().getTime();
									var actualAlarmTime = parseInt(alarmTime, 10) - currentTime;

									var newQuickAlarm = new reminderfox.core.ReminderFoxQuickAlarm(alarmText, notesText, alarmTime, snoozeTime);
									quickAlarmArray[quickAlarmArray.length] = newQuickAlarm;

									currentAlarms = currentAlarms.substring(snoozeEndIndex + 1);
								}
							}
						}
					}
					reminderfox.core.updateQuickAlarmPref(quickAlarmArray);
				}
			}
		} // end of 'Migrate old quick alarms'
		// migrate 'Default Views'			//gWDefaultViews 2010-03
		reminderfox.core.migrate_defaultView('Set');
	}
	else if (oldVersion < "2.0.1") { 
		// set number of months back to just 1 month display for 2.0 users
		var numMonths = reminderfox.core.getPreferenceValue (reminderfox.consts.CALENDAR_MONTHS,
			reminderfox.calendar.numMonth);
		if ( numMonths == 3 ) { 
			reminderfox.core.setPreferenceValue (reminderfox.consts.CALENDAR_MONTHS, 1);
		}
		
		// clear old stored filter; was causing people issue on upgrade as they had a TODO 
		// filter selected as well; in 2.0 it is shared between reminder/todo
		reminderfox.core.setPreferenceValue(reminderfox.consts.DEFAULT_FILTER_EVENTS, 0);
	}
};


reminderfox.core.getSortedIndexOfNewReminder= function(_reminderEventsArg, newreminder, addUniqueOnly){
	var month = newreminder.date.getMonth();

	// We go through each reminder and then compare that reminder's month with
	// the reminder-to-be-added month, and if the new month is less, add there;
	// if the months are equal, then compare the days and add appropriately.
	for (var i = 0; i < _reminderEventsArg.length; i++) {
		var reminder = _reminderEventsArg[i];

		// add current reminder before reminders from later months
		if (month < reminder.date.getMonth()) {
			return i;
		}
		// if they have the same month, then compare dates
		else
			if (month == reminder.date.getMonth()) {
				if (newreminder.date.getDate() < reminder.date.getDate()) {
					return i;
				}
				else
					if (newreminder.date.getDate() == reminder.date.getDate()) {
						if (addUniqueOnly && newreminder.summary == reminder.summary) {
							// this reminder is already in the list; just ignore it
							return -1;
						}
						else {
							if (!newreminder.allDayEvent) {
								// this is an hourly event.  Let's place it chronologically
								if (reminder.allDayEvent) {
									// the current reminder is all day; let's put chronological events
									// first
									return i;
								}
								else {
									// the current reminder is an hour event as well; let's place them
									// chronologically.
									if (newreminder.date.getHours() < reminder.date.getHours() ||
									(newreminder.date.getHours() == reminder.date.getHours() && newreminder.date.getMinutes() < reminder.date.getMinutes())) {
										return i;
									}
								}
							}
							// if this is an Imp	ortant reminder, add it before other reminders of the same day
							else
								if (newreminder.priority == reminderfox.consts.PRIORITY_IMPORTANT) {
									return i;
								}
						}
					}
			} // monthly
	} // for
	return _reminderEventsArg.length;
};


reminderfox.core.indexOf= function(aParent, aChild, overrideLast){
	// -1 if it does not exist
	var children = aParent.childNodes;
	if (!children) {
		return null;
	}
	for (var x = 0; x < children.length; x++) {
		if (children[x] == aChild) {
			if (overrideLast) {
				return x;
			}
			else {
				return (x == children.length - 1) ? -1 : x;
			}
		}
	}
	return null;
};


reminderfox.core.getSortedIndexOfNewTodo= function(reminderFoxTodos, newTodo){
	// if current todo is important, add to start of list
	if (newTodo.priority == reminderfox.consts.PRIORITY_IMPORTANT) {
		// insert at beginning
		return 0;
	}
	else {
		// run through until find one that's not important, and add new one before it
		for (var i = 0; i < reminderFoxTodos.length; i++) {
			if (!reminderFoxTodos[i].priority == reminderfox.consts.PRIORITY_IMPORTANT) {
				if (newTodo.showInTooltip) {
					return i;
				}
				else {
					if (!reminderFoxTodos[i].showInTooltip) {
						return i;
					}
				}
			}
		}
	}

	// if the reminder hasn't been added yet, then place it at the end
	return reminderFoxTodos.length;
};


reminderfox.core.getAlarmInMinutes= function(reminder, reminderInstanceDate){
	if (!reminder.alarm) {
		return null;
	}
	var alarmMinutes = 0;

	// TRIGGER (in RmFx alarm) can be  "TRIGGER" (trigrel / trigabs) CRLF
	// trigabs::   TRIGGER;VALUE=DATE-TIME:20130505T143000Z
	if (reminder.alarm.charAt(reminder.alarm.length-1) == "Z")  {
		if (reminderInstanceDate instanceof Date === false) reminderInstanceDate = reminderInstanceDate.date;
		alarmMinutes = (reminderInstanceDate - reminderfox.date.getDateTimeFromString(reminder.alarm))/60/1000;

	} else {
	// trigrel::   TRIGGER:-PT5M		(may contain TRIGGER;RELATED=END:PT5M .. ignored that for the moment )
		alarmMinutes = reminderfox.core.getDurationAsMinutes(reminder.alarm);
	}

	reminderfox.util.Logger('gcal', "  getAlarmInMinutes reminderInstanceDate: " + reminderInstanceDate.toLocaleString()
		+ "  duration :" + reminder.alarm + "  " + alarmMinutes);
	return alarmMinutes;
};


reminderfox.core.getDurationAsMinutes= function(duration){
		var _Minutes = 0;
		/* Pattern for a duration: [+-]PnnW or [+-]PnnDTnnHnnMnnS */
		var DURATION = /^([+-])?P(\d+W)?(\d+D)?(T)?(\d+H)?(\d+M)?(\d+S)?$/;
		var matches = DURATION.exec(duration);

		if (!matches) {
	//reminderfox.util.PromptAlert("getDurationAsMinutes  Invalid duration: " + duration);
		//		alert("Invalid duration: ... no matches : " + alarmTime )
		}
		if (matches[2] && (matches[3] || matches[5] || matches[6] || matches[7])) {
	//		alert("Week must be on its own: " + alarmTime )
		}
		if (!matches[4] && (matches[5] || matches[6] || matches[7])) {
	//		alert("Invalid duration - missing time marker 'T' with hours/minutes/seconds: " + alarmTime )
		}

		var sign = (matches[1] == '-' ? -1 : +1);

		var apply = function(value, factor, method) {
			value = parseInt(value, 10);
			if (!isNaN(value)) {
				_Minutes = _Minutes + value * factor;
			}
		};

		if (matches[2]) {
			apply(matches[2], 60*24*7, 'W week');		// week
		}
		else {
			apply(matches[3], 60*24, 'D day');
			apply(matches[5], 60, 'H hours');
			apply(matches[6], 1, 'M minutes');
	//		apply(matches[7], 1, 'Seconds');		// don't care about it
		}
	return _Minutes;
};


// index is the number of the element you wish to remove
// from the array: _reminderEventsArg
reminderfox.core.removeFromArray= function(_reminderEventsArg, index){
	var rLen = _reminderEventsArg.length;
	for (index; index < rLen; index++) {
		// assigns the value of elementnr+1 to elementnr, so you move all items by 1
		_reminderEventsArg[index] = _reminderEventsArg[index + 1];
	}
	_reminderEventsArg.length = _reminderEventsArg.length - 1;
};


// position is the number where you want to add the new element (reminder) into
// the array: _reminderEventsArg
reminderfox.core.insertIntoArray= function(_reminderEventsArg, reminder, position){
	var origLength = _reminderEventsArg.length;
	if (position > origLength) {
		position = origLength;
	}

	_reminderEventsArg.length = _reminderEventsArg.length + 1;

	for (var i = origLength; i >= 0; i--) {
		if (i == position) {
			_reminderEventsArg[i] = reminder;
			break;
		}
		else
			if (i > position) {
				_reminderEventsArg[i] = _reminderEventsArg[i - 1];
			}
			else
				if (i < position) {
					break;
				}
	}
};


reminderfox.core.generateUniqueReminderId= function(date){
	if (!date) {
		date = new Date();
	}
	return date.getTime() + "-" + Math.round(900000000 + (Math.random() * 100000000));
};


reminderfox.core.getNextReminderOccurrence= function(reminder, originalDate, weekNumber, interval){
	var month, year, monthReminder, weeklyReminder;

	var reminderCurrentDate = reminder.date;

	if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_YEARLY) {
		// do nothing; should only be once occurrence per year
	}
	else
		if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_YEARLY_DAY) {
		// do nothing; should only be once occurrence per year
		}
		else
			if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_MONTHLY_DATE) {
				monthReminder = reminderfox.core.cloneReminderFoxEvent(reminder);

				month = reminderCurrentDate.getMonth();
				year = reminderCurrentDate.getFullYear();
				month = month + interval;
				while (month >= 12) {
					month = month - 12;
					year = year + 1;
				}

				var dayVal = reminderfox.date.getValidDateForMonth(year, month, originalDate.getDate());
				monthReminder.date = new Date(year, month, dayVal, originalDate.getHours(), originalDate.getMinutes());

				return monthReminder;
			}
			else
				if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_MONTHLY_DAY) {
					monthReminder = reminderfox.core.cloneReminderFoxEvent(reminder);

					month = reminderCurrentDate.getMonth();
					year = reminderCurrentDate.getFullYear();
					month = month + interval;
					while (month >= 12) {
						month = month - 12;
						year = year + 1;
					}

					var reminderDay = originalDate.getDay();
					var nextMonthDate = new Date(year, month, 1);
					var reminderWeekDateThisMonth = reminderfox.date.getDateForSpecifiedWeekNumber(nextMonthDate, reminderDay, weekNumber);
					monthReminder.date = new Date(year, month, reminderWeekDateThisMonth, originalDate.getHours(), originalDate.getMinutes());
					return monthReminder;
				}
				else
					if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_WEEKLY) {
						weeklyReminder = reminderfox.core.cloneReminderFoxEvent(reminder);
						var weeklyInterval = 1;
						if (weeklyReminder.recurrence.interval) {
							weeklyInterval = weeklyReminder.recurrence.interval;
						}
						weeklyReminder.date.setDate(weeklyReminder.date.getDate() + (weeklyInterval * 7));
						return weeklyReminder;
					}
	return null;
};

reminderfox.core.getFirstReminderOccurrenceAfterStartDate= function(reminder, initialStartDate){
var year, month, day, dayVal, newDate, weekNumber, yearReminder, monthReminder, weeklyReminder, reminderWeekDateThisMonth, 
	nextYearStartDate, dailyReminder,
	reminderDay, reminderOriginalDate, yearsDiff, monthsDiff, numOfDaysDiff, modVal, diff;

	var startDate = new Date(initialStartDate.getFullYear(), initialStartDate.getMonth(), initialStartDate.getDate(), initialStartDate.getHours(), initialStartDate.getMinutes());
	var finalDate;
	var todaysDate = new Date();
	var interval = 1;
	if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_ONETIME) {
		return reminder;
	}
	else
		if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_YEARLY) {
			reminderOriginalDate = reminder.date;
			// if start date is less than the default reminder date, return the reminder date
			if (reminderfox.core.compareDates(startDate, reminderOriginalDate) == -1) {
				return reminderfox.core.cloneReminderFoxEvent(reminder);
			}


			if (reminder.recurrence.interval && reminder.recurrence.interval > 1) { // 2
				// if it's same year, just continue to normal logic;
				// otherwise, advance the year
				interval = reminder.recurrence.interval;
				if (startDate.getFullYear() != reminderOriginalDate.getFullYear()) {

					// get the differnce and years, and add the value to the final date accordingly
					yearsDiff = startDate.getFullYear() - reminderOriginalDate.getFullYear();
					modVal = reminderfox.util.mod(yearsDiff, interval);
					// if mod val === 0, then this year is valid; continue on
					if (modVal !== 0) {
						diff = interval - modVal;
						startDate.setFullYear(startDate.getFullYear() + diff);
						dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear(), reminderOriginalDate.getMonth(), reminderOriginalDate.getDate());
						startDate.setDate(dayVal);
						finalDate = new Date(startDate.getFullYear(), reminderOriginalDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());

						yearReminder = reminderfox.core.cloneReminderFoxEvent(reminder);
						yearReminder.date = finalDate;
						return yearReminder;
					}
				}
			}
			if (reminderOriginalDate.getMonth() < startDate.getMonth()) {
				dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear() + interval, reminderOriginalDate.getMonth(), reminderOriginalDate.getDate());
				finalDate = new Date(startDate.getFullYear() + interval, reminderOriginalDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
			}
			else
				if (reminderOriginalDate.getMonth() > startDate.getMonth()) {
					dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear(), reminderOriginalDate.getMonth(), reminderOriginalDate.getDate());
					finalDate = new Date(startDate.getFullYear(), reminderOriginalDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
				}
				// same month
				else {
					if (reminderOriginalDate.getDate() < startDate.getDate()) {
						dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear() + interval, reminderOriginalDate.getMonth(), reminderOriginalDate.getDate());
						finalDate = new Date(startDate.getFullYear() + interval, reminderOriginalDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
					}
					else
						if (reminderOriginalDate.getDate() > startDate.getDate()) {
							dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear(), reminderOriginalDate.getMonth(), reminderOriginalDate.getDate());
							finalDate = new Date(startDate.getFullYear(), reminderOriginalDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
						}
						else { // same date; return it
							dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear(), reminderOriginalDate.getMonth(), reminderOriginalDate.getDate());
							finalDate = new Date(startDate.getFullYear(), reminderOriginalDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
						}
				}

			yearReminder = reminderfox.core.cloneReminderFoxEvent(reminder);
			yearReminder.date = finalDate;
			return yearReminder;
		}
		else
			if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_YEARLY_DAY) {
				reminderOriginalDate = reminder.date;

				// if start date is less than the default reminder date, then use the reminder date as start date
				if (reminderfox.core.compareDates(startDate, reminderOriginalDate) == -1) {
					startDate = reminderOriginalDate;
				}

				if (reminder.recurrence.interval && reminder.recurrence.interval > 1) { // 2
					interval = reminder.recurrence.interval;

					// if it's same year, just continue to normal logic;
					// otherwise, advance the year
					if (startDate.getFullYear() != reminderOriginalDate.getFullYear()) {
						// get the differnce and years, and add the value to the final date accordingly
						yearsDiff = startDate.getFullYear() - reminderOriginalDate.getFullYear();
						modVal = reminderfox.util.mod(yearsDiff, reminder.recurrence.interval);
						// if mod val === 0, then this year is valid; continue on
						if (modVal !== 0) {
							diff = interval - modVal;
							startDate.setFullYear(startDate.getFullYear() + diff);

							reminderDay = reminderOriginalDate.getDay();
							weekNumber = reminderfox.date.getWeekNumber(reminder.date);
							nextYearStartDate = new Date(startDate.getFullYear(), reminderOriginalDate.getMonth(), reminderOriginalDate.getDate());
							reminderWeekDateThisMonth = reminderfox.date.getDateForSpecifiedWeekNumber(nextYearStartDate, reminderDay, weekNumber);
							dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear(), reminderOriginalDate.getMonth(), reminderWeekDateThisMonth);
							finalDate = new Date(startDate.getFullYear(), reminderOriginalDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());

							yearReminder = reminderfox.core.cloneReminderFoxEvent(reminder);
							yearReminder.date = finalDate;
							return yearReminder;
						}
					}
				}

				if (reminderOriginalDate.getMonth() < startDate.getMonth()) {
					reminderDay = reminderOriginalDate.getDay();
					weekNumber = reminderfox.date.getWeekNumber(reminder.date);
					nextYearStartDate = new Date(startDate.getFullYear() + interval, reminderOriginalDate.getMonth(), reminderOriginalDate.getDate());
					reminderWeekDateThisMonth = reminderfox.date.getDateForSpecifiedWeekNumber(nextYearStartDate, reminderDay, weekNumber);
					dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear() + interval, reminderOriginalDate.getMonth(), reminderWeekDateThisMonth);
					finalDate = new Date(startDate.getFullYear() + interval, reminderOriginalDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
				}
				else
					if (reminderOriginalDate.getMonth() > startDate.getMonth()) {
						reminderDay = reminderOriginalDate.getDay();
						weekNumber = reminderfox.date.getWeekNumber(reminder.date);
						nextYearStartDate = new Date(startDate.getFullYear(), reminderOriginalDate.getMonth(), reminderOriginalDate.getDate());
						reminderWeekDateThisMonth = reminderfox.date.getDateForSpecifiedWeekNumber(nextYearStartDate, reminderDay, weekNumber);
						dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear(), reminderOriginalDate.getMonth(), reminderWeekDateThisMonth);
						finalDate = new Date(startDate.getFullYear(), reminderOriginalDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
					}
					// same month
					else {
						reminderDay = reminderOriginalDate.getDay();
						weekNumber = reminderfox.date.getWeekNumber(reminder.date);

						nextYearStartDate = new Date(startDate.getFullYear(), reminderOriginalDate.getMonth(), reminderOriginalDate.getDate());
						reminderWeekDateThisMonth = reminderfox.date.getDateForSpecifiedWeekNumber(nextYearStartDate, reminderDay, weekNumber);

						if (reminderWeekDateThisMonth < startDate.getDate()) {
							nextYearStartDate = new Date(startDate.getFullYear() + interval, reminderOriginalDate.getMonth(), reminderOriginalDate.getDate());
							reminderWeekDateThisMonth = reminderfox.date.getDateForSpecifiedWeekNumber(nextYearStartDate, reminderDay, weekNumber);
							dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear() + interval, reminderOriginalDate.getMonth(), reminderWeekDateThisMonth);
							finalDate = new Date(startDate.getFullYear() + interval, reminderOriginalDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
						}
						else
							if (reminderWeekDateThisMonth > startDate.getDate()) {
								dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear(), reminderOriginalDate.getMonth(), reminderWeekDateThisMonth);
								finalDate = new Date(startDate.getFullYear(), reminderOriginalDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
							}
							else { // same date; return it
								dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear(), reminderOriginalDate.getMonth(), reminderWeekDateThisMonth);
								finalDate = new Date(startDate.getFullYear(), reminderOriginalDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
							}
					}

				yearReminder = reminderfox.core.cloneReminderFoxEvent(reminder);
				yearReminder.date = finalDate;
				return yearReminder;

			}
			else
				if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_MONTHLY_DATE) {
					reminderOriginalDate = reminder.date;
					// if start date is less than the default reminder date, then use the reminder date as start date
					if (reminderfox.core.compareDates(startDate, reminderOriginalDate) == -1) {
						startDate = reminderOriginalDate;
					}

					if (reminder.recurrence.interval && reminder.recurrence.interval > 1) { // 2
						interval = reminder.recurrence.interval;
						monthsDiff = reminderfox.core.computerNumberOfMonthsDifference(reminderOriginalDate, startDate);
						if (monthsDiff !== 0) {

							// get the differnce and years, and add the value to the final date accordingly
							modVal = reminderfox.util.mod(monthsDiff, interval);
							// if mod val === 0, then this month is valid; continue on
							if (modVal !== 0) {
								diff = interval - modVal;
								startDate.setMonth(startDate.getMonth() + diff);

								dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear(), startDate.getMonth(), reminderOriginalDate.getDate());
								finalDate = new Date(startDate.getFullYear(), startDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
								monthReminder = reminderfox.core.cloneReminderFoxEvent(reminder);
								monthReminder.date = finalDate;
								return monthReminder;
							}
						}
					}


					// first check to see if the date of the reminder is less or more than start date.
					// if less, then we need to go to the next month;  if more, than we will use this month
					if (reminderOriginalDate.getDate() < startDate.getDate()) {
						month = startDate.getMonth();
						year = startDate.getFullYear();
						month = month + interval;
						while (month >= 12) {
							month = month - 12;
							year = year + 1;
						}

						dayVal = reminderfox.date.getValidDateForMonth(year, month, reminderOriginalDate.getDate());
						finalDate = new Date(year, month, dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
					}
					else
						if (reminderOriginalDate.getDate() > startDate.getDate()) {
							dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear(), startDate.getMonth(), reminderOriginalDate.getDate());
							finalDate = new Date(startDate.getFullYear(), startDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
						}
						else { // same date; return it
							dayVal = reminderfox.date.getValidDateForMonth(startDate.getFullYear(), startDate.getMonth(), reminderOriginalDate.getDate());
							finalDate = new Date(startDate.getFullYear(), startDate.getMonth(), dayVal, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
						}


					monthReminder = reminderfox.core.cloneReminderFoxEvent(reminder);
					monthReminder.date = finalDate;
					return monthReminder;
				}
				else
					if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_MONTHLY_DAY) {
						reminderOriginalDate = reminder.date;
						// if start date is less than the default reminder date, then use the reminder date as start date
						if (reminderfox.core.compareDates(startDate, reminderOriginalDate) == -1) {
							startDate = reminderOriginalDate;
						}

						reminderDay = reminder.date.getDay();
						weekNumber = reminderfox.date.getWeekNumber(reminder.date);

						if (reminder.recurrence.interval && reminder.recurrence.interval > 1) { // 2
							interval = reminder.recurrence.interval;
							monthsDiff = reminderfox.core.computerNumberOfMonthsDifference(reminderOriginalDate, startDate);
							if (monthsDiff !== 0) {
								// get the differnce and years, and add the value to the final date accordingly
								modVal = reminderfox.util.mod(monthsDiff, interval);
								// if mod val === 0, then this month is valid; continue on
								if (modVal !== 0) {
									diff = interval - modVal;
									startDate.setMonth(startDate.getMonth() + diff);
									month = startDate.getMonth();
									year = startDate.getFullYear();
									reminderWeekDateThisMonth = reminderfox.date.getDateForSpecifiedWeekNumber(startDate, reminderDay, weekNumber);

									dayVal = reminderfox.date.getValidDateForMonth(year, month, reminderWeekDateThisMonth);
									newDate = new Date(year, month, dayVal);
									reminderWeekDateThisMonth = reminderfox.date.getDateForSpecifiedWeekNumber(newDate, reminderDay, weekNumber);
									finalDate = new Date(newDate.getFullYear(), newDate.getMonth(), reminderWeekDateThisMonth, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
									monthReminder = reminderfox.core.cloneReminderFoxEvent(reminder);
									monthReminder.date = finalDate;
									return monthReminder;
								}
							}
						}

						reminderWeekDateThisMonth = reminderfox.date.getDateForSpecifiedWeekNumber(startDate, reminderDay, weekNumber);

						// first check to see if the date of the reminder is less or more than start date.
						// if less, then we need to go to the next month;  if more, than we will use this month
						if (reminderWeekDateThisMonth < startDate.getDate()) {
							month = startDate.getMonth();
							year = startDate.getFullYear();
							month = month + interval;
							while (month >= 12) {
								month = month - 12;
								year = year + 1;
							}
							dayVal = reminderfox.date.getValidDateForMonth(year, month, reminderWeekDateThisMonth);
							newDate = new Date(year, month, dayVal);
							reminderWeekDateThisMonth = reminderfox.date.getDateForSpecifiedWeekNumber(newDate, reminderDay, weekNumber);
							finalDate = new Date(newDate.getFullYear(), newDate.getMonth(), reminderWeekDateThisMonth, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
						}
						else
							if (reminderWeekDateThisMonth > startDate.getDate()) {
								finalDate = new Date(startDate.getFullYear(), startDate.getMonth(), reminderWeekDateThisMonth, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
							}
							else { // same date; return it
								finalDate = new Date(startDate.getFullYear(), startDate.getMonth(), reminderWeekDateThisMonth, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
							}

						monthReminder = reminderfox.core.cloneReminderFoxEvent(reminder);
						monthReminder.date = finalDate;
						return monthReminder;
					}

					// WEEKLY
					else
						if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_WEEKLY) {
							reminderOriginalDate = reminder.date;
							// if start date is less than the default reminder date, then use the reminder date as start date
							if (reminderfox.core.compareDates(startDate, reminderOriginalDate) == -1) {
								startDate = reminderOriginalDate;
							}

							var startDay = startDate.getDay();
							var targetYear = startDate.getFullYear();
							var targetMonth = startDate.getMonth();
							weeklyReminder = reminderfox.core.cloneReminderFoxEvent(reminder);

							if (reminder.recurrence.byDay && reminder.recurrence.byDay.indexOf(",") != -1) {
								reminderDay = startDay;
								// first handle interval to get proper week
								weeklyReminder = reminderfox.core.cloneReminderFoxEvent(reminder);
								weeklyReminder.date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes());
								if (reminder.recurrence.interval && reminder.recurrence.interval > 1) { // 2
									interval = reminder.recurrence.interval;

									var dayValue = reminder.date.getDay();
									weeklyReminder = reminderfox.core.getThisDayFromCurrentWeeklyReminder(weeklyReminder, dayValue);

									finalDate = new Date(weeklyReminder.date.getFullYear(), weeklyReminder.date.getMonth(), weeklyReminder.date.getDate(), reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
									// since this is alternating, determine if this week is the correct week, or if it is next week
									numOfDaysDiff = reminderfox.core.computeNumberOfDaysDifference(reminder.date, finalDate);
									modVal = reminderfox.util.mod(numOfDaysDiff, interval * 7);
									if (modVal !== 0) {
										diff = interval * 7 - modVal;
										// we are an odd week away, need to add 7 to get to the next alternating week
										finalDate.setDate(finalDate.getDate() + diff);
										weeklyReminder.date = finalDate;
									}
									weeklyReminder = reminderfox.core.getThisDayFromCurrentWeeklyReminder(weeklyReminder, 0); // reset date to Sunday
									reminderDay = 0; // reset to sunday
									// if the reminder original date is after the first date of this week, move ahead to that date...
									while (reminderfox.core.compareDates(weeklyReminder.date, reminderOriginalDate) == -1) {
										reminderDay++;
										weeklyReminder.date.setDate(weeklyReminder.date.getDate() + 1);
									}
									while (reminderfox.core.compareDates(weeklyReminder.date, startDate) == -1) {
										reminderDay++;
										weeklyReminder.date.setDate(weeklyReminder.date.getDate() + 1);
									}
									targetYear = weeklyReminder.date.getFullYear();
									targetMonth = weeklyReminder.date.getMonth();
								}

								// here
								var increment = 0;
								while (!reminderfox.core.isDayInByDayList(reminderDay, reminder.recurrence.byDay) && increment < 8) {
									reminderDay++;
									if (reminderDay >= 7) { // handle going past Saturday (6) and reset to Sunday (0)
										reminderDay = 0;
									}
									increment++;
								}
								finalDate = new Date(targetYear, targetMonth, weeklyReminder.date.getDate() + increment, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
							}
							else {
								reminderDay = reminder.date.getDay();
								var compareCurrentDay = reminderDay + 1;
								var compareFirstDay = startDay + 1;
								var daysDifference;
								if (compareCurrentDay < compareFirstDay) {
									compareCurrentDay = compareCurrentDay + 7;
								}
								daysDifference = (compareCurrentDay - compareFirstDay);
								finalDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + daysDifference, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());

								if (reminder.recurrence.interval && reminder.recurrence.interval > 1) { // 2
									interval = reminder.recurrence.interval;
									// since this is alternating, determine if this week is the correct week, or if it is next week
									numOfDaysDiff = reminderfox.core.computeNumberOfDaysDifference(reminder.date, finalDate);
									modVal = reminderfox.util.mod(numOfDaysDiff, interval * 7);
									if (modVal !== 0) {
										diff = interval * 7 - modVal;
										// we are an odd week away, need to add 7 to get to the next alternating week
										finalDate.setDate(finalDate.getDate() + diff);
									}
								}
							}

							weeklyReminder.date = finalDate;
							return weeklyReminder;

						}
						else
							if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_DAILY) {
								reminderOriginalDate = reminder.date;
								// if start date is less than the default reminder date, return the reminder date
								if (reminderfox.core.compareDates(startDate, reminderOriginalDate) == -1) {
									return reminderfox.core.cloneReminderFoxEvent(reminder);
								}

								dailyReminder = reminderfox.core.cloneReminderFoxEvent(reminder);
								if (reminder.recurrence.interval && reminder.recurrence.interval > 1) { // 2
									interval = reminder.recurrence.interval;
									numOfDaysDiff = reminderfox.core.computeNumberOfDaysDifference(reminder.date, startDate);

									modVal = reminderfox.util.mod(numOfDaysDiff, interval);
									if (modVal !== 0) {
										diff = interval - modVal;
										// we are an odd week away, need to add 7 to get to the next alternating week
										dailyReminder.date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + diff, reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
										return dailyReminder;
									}
								}

								dailyReminder.date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), reminderOriginalDate.getHours(), reminderOriginalDate.getMinutes());
								return dailyReminder;
							}
	return null;
};


reminderfox.core.isDayInByDayList= function(dayNum, byDayList){
	if (dayNum === 0) {
		return byDayList.indexOf("SU") != -1;
	}
	else
		if (dayNum == 1) {
			return byDayList.indexOf("MO") != -1;
		}
		else
			if (dayNum == 2) {
				return byDayList.indexOf("TU") != -1;
			}
			else
				if (dayNum == 3) {
					return byDayList.indexOf("WE") != -1;
				}
				else
					if (dayNum == 4) {
						return byDayList.indexOf("TH") != -1;
					}
					else
						if (dayNum == 5) {
							return byDayList.indexOf("FR") != -1;
						}
						else
							if (dayNum == 6) {
								return byDayList.indexOf("SA") != -1;
							}
	return false;
};


reminderfox.core.computerNumberOfMonthsDifference= function(startDate, endDate){
	var monthCount = 0;
	var finalMonth;
	var startYear = startDate.getFullYear();
	var startMonth = startDate.getMonth();
	var endYear = endDate.getFullYear();
	if (endYear > startYear) {
		finalMonth = 12;
		monthCount += endDate.getMonth() + 1; // +1 for month 0-based offset
		endYear--;
		while (endYear > startYear) {
			monthCount += 12;
			endYear--;
		}
	}
	else {
		finalMonth = endDate.getMonth() + 1;
	}

	monthCount += (finalMonth - (startMonth + 1));
	return monthCount;
};


reminderfox.core.computeNumberOfDaysDifference= function(origStartDate, origEndDate){
	var startDate = new Date(origStartDate.getFullYear(), origStartDate.getMonth(), origStartDate.getDate(), 0, 0, 0);
	var finalDate = new Date(origEndDate.getFullYear(), origEndDate.getMonth(), origEndDate.getDate(), 0, 0, 0);

	// The number of milliseconds in one day
	var ONE_DAY = 1000 * 60 * 60 * 24;

	// Convert both dates to milliseconds
	var date1_ms = startDate.getTime();
	var date2_ms = finalDate.getTime();

	// Calculate the difference in milliseconds
	var difference_ms = Math.abs(date1_ms - date2_ms);

	// Convert back to days and return
	var numOfDaysDiff = Math.round(difference_ms / ONE_DAY);
	return numOfDaysDiff;
};


reminderfox.core.getWindowEnumerator= function(){
	var windowManager = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService();
	var windowManagerInterface = windowManager.QueryInterface(Components.interfaces.nsIWindowMediator);

	var windowEnumerator = windowManagerInterface.getEnumerator("navigator:browser");
	if (windowEnumerator.hasMoreElements()) {
		return windowEnumerator;
	}

	windowEnumerator = windowManagerInterface.getEnumerator("mail:3pane");
	if (windowEnumerator.hasMoreElements()) {
		return windowEnumerator;
	}

	windowEnumerator = windowManagerInterface.getEnumerator("mail:messageWindow");
	if (windowEnumerator.hasMoreElements()) {
		return windowEnumerator;
	}

	windowEnumerator = windowManagerInterface.getEnumerator("calendarMainWindow");
	if (windowEnumerator.hasMoreElements()) {
		return windowEnumerator;
	}

	return windowManagerInterface.getEnumerator("navigator:browser");
};


reminderfox.core.playSound= function(){
	var gSound = Components.classes["@mozilla.org/sound;1"].createInstance(Components.interfaces.nsISound);
	var savefilePath;
	// check if user has specified a specific file path for sound in their preferences
	try {
		savefilePath = reminderfox._prefsBranch.getCharPref(reminderfox.consts.ALARM_SOUND_PATH);
	}
	catch (e) {
	}
	// if not, then play default beep sound
	if (!savefilePath || savefilePath === "") {
		gSound.beep();
	}
	else {
		var _ioService = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
		var _soundService = Components.classes["@mozilla.org/sound;1"].createInstance(Components.interfaces.nsISound);
		_soundService.init();

		var uri = null;
		try {
			var localFile = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsIFile);
			localFile.initWithPath(savefilePath);

			if (localFile.exists())
				uri = _ioService.newFileURI(localFile);
		}
		catch (e) {
			uri = _ioService.newURI(aPath, null, null);
		}

		if (uri)
			_soundService.play(uri);
	}
};

reminderfox.core.getSortNewUpcomingReminderIndex= function(reminders, newreminder){
	// We go through each reminder and then compare that reminder's month with
	// the reminder-to-be-added month, and if the new month is less, add there;
	// if the months are equal, then compare the days and add appropriately.

	// first check if the new reminder is greater than the last sorted reminder.  If so, add to
	// end of the list...
	if (reminders.length > 0 && reminderfox.core.compareReminderDatesAndTimes(newreminder, reminders[reminders.length - 1]) != -1) {
		return reminders.length;
	}

	// otherwise, go through the list and insert where the new reminder is less than
	// the reminders in the list
	for (var i = 0; i < reminders.length; i++) {
		var currentReminder = reminders[i];
		if (reminderfox.core.compareReminderDatesAndTimes(newreminder, currentReminder) == -1) {
			return i;
		}
	}

	// if the reminder hasn't been added yet, then place it at the end
	// of the list
	return reminders.length;
};


reminderfox.core.getAllTodosInDateRange= function(startDate, endDate){
	var allTodosArray = { };
	var i;
	var reminderFoxTodosArrayArg =  reminderfox.core.getReminderTodos();
	for ( var n in reminderFoxTodosArrayArg ) {
		var reminderTodos = reminderFoxTodosArrayArg[n];
			for (  i = 0; i < reminderTodos.length; i++ ) {
			var reminderTodo = reminderTodos[i];
			if ( reminderTodo.date ) {
				var allReminders = reminderfox.core.getAllRemindersInDateRange( reminderTodo,  startDate, endDate, false );

				if (!allTodosArray[n]) {
					allTodosArray[n] = new Array();
				}
				var currentTodosList  = allTodosArray[n];
				for ( var j = 0; j < allReminders.length; j++ ) {				
					currentTodosList[currentTodosList.length] = allReminders[j];
				}
			}
		}
	}
	return allTodosArray;
};


reminderfox.core.getAllTodosInDateRangeForGivenList= function(todoList, startDate, endDate){
	var dateTodos = new Array();
	var i;

	for (i = 0; i < todoList.length; i++) {
		var reminderTodo = todoList[i];
		if (reminderTodo.date &&
		((reminderfox.core.compareDates(reminderTodo.date, startDate) != -1) &&
		(reminderfox.core.compareDates(reminderTodo.date, endDate) != 1))) {

			dateTodos[dateTodos.length] = reminderTodo;
		}
	}

	return dateTodos;
};


reminderfox.core.getAllTodosInDateRangeForGivenListMultiples= function(todoList, startDate, endDate){
	var dateTodos = new Array();
	var i;

	for (i = 0; i < todoList.length; i++) {
		var reminderTodo = todoList[i];
		if (reminderTodo.date) {
			var allReminders = reminderfox.core.getAllRemindersInDateRange(reminderTodo, startDate, endDate, true);
			for (var j = 0; j < allReminders.length; j++) {
				dateTodos[dateTodos.length] = allReminders[j];
			}
		}
	}

	return dateTodos;
};


reminderfox.core.getAllRemindersInDateRange= function(reminder, initialStartDate, endDate, limitWeeklyReminders, info){
var yearReminder, monthReminder, weeklyReminder, weekNumber, 
	dailyReminder, arrayIndex, 
	reminderDay, origDate, endIndex, interval, result, dayOfYear, endDayOfYear;

	var startDate = new Date(initialStartDate.getFullYear(), initialStartDate.getMonth(), initialStartDate.getDate(), initialStartDate.getHours(), initialStartDate.getMinutes());

	var reminderArray = new Array();
	var i;
	// if the reminder's recurrence enddate is less than the end date, use it as the end point
	if (reminder.recurrence.endDate) {
		if (reminderfox.core.compareDates(reminder.recurrence.endDate, endDate) == -1) {
			endDate = reminder.recurrence.endDate;
		}
	}

//COUNT
/*--------------
reminderfox.consts.RECURRENCE_ONETIME = null; // default
reminderfox.consts.RECURRENCE_YEARLY = 0;
reminderfox.consts.RECURRENCE_MONTHLY_DATE = 1;
reminderfox.consts.RECURRENCE_MONTHLY_DAY = 3;
reminderfox.consts.RECURRENCE_WEEKLY = 4;
reminderfox.consts.RECURRENCE_YEARLY_DAY = 6;
reminderfox.consts.RECURRENCE_DAILY = 7;
-------*/
	if (reminder.recurrence.count) {
		var nDays = 0;
		switch (reminder.recurrence.type) {

			case reminderfox.consts.RECURRENCE_YEARLY:
			case reminderfox.consts.RECURRENCE_YEARLY_DAY:
				nDays = 365; 
				break;

			case reminderfox.consts.RECURRENCE_MONTHLY_DATE:
			case reminderfox.consts.RECURRENCE_MONTHLY_DAY:
				nDays = 31; 
				break;

			case reminderfox.consts.RECURRENCE_WEEKLY:
				nDays = 7; 
				break;

			case reminderfox.consts.RECURRENCE_DAILY:
				nDays = 1; 
				break;
		}

		interval = (reminder.recurrence.interval) ? +reminder.recurrence.interval : 1;
		nDays = nDays*interval*(reminder.recurrence.count-1);

		var recurEndDate = reminderfox.date.convertDate(reminderfox.date.convertDate(reminder.date) + nDays);
	//	reminderfox.util.Logger('recurCount','  reminder: ' + reminder.summary
	//		+ "\n start/end : " + reminder.date.toString()  + " / " + reminder.endDate.toString()
	//		+ "\n recur : " + reminder.recurrence.type + " interval :" + reminder.recurrence.interval + "  count: " + reminder.recurrence.count 
	//		+ "\n recurEndDate : " + recurEndDate.toString())

		// if the reminder's recurrence enddate is less than the end date, use it as the end point
		if (recurEndDate) {
			if (reminderfox.core.compareDates(recurEndDate, endDate) == -1) {
				endDate = recurEndDate;
			}
		}
	}



	// if reminder date is greater than the end date, then return empy array
	if (reminderfox.core.compareDates(reminder.date, endDate) == 1) {
		return reminderArray;
	}

	// if reminder date is greater than the start date, use the reminder date as the
	// starting date
	if (reminderfox.core.compareDates(reminder.date, startDate) == 1) {
		startDate = reminder.date;
	}

	if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_ONETIME) {
		if (reminderfox.core.compareDates(reminder.date, endDate) == 1) {
			// return nothing if the reminder is outside of the ending date
			return reminderArray;
		}
		else
			if (reminderfox.core.compareDates(reminder.date, startDate) == -1) {
				// return nothing if the reminder has already occurred prior to the starting date

				// unless it's marked as Remind Until Completed...  then return it if today
				// falls within the date range
				if (reminder.remindUntilCompleted && reminder.remindUntilCompleted == reminderfox.consts.REMIND_UNTIL_COMPLETE_MARKED) {
					var todaysDate = new Date();
					if (reminderfox.core.compareDates(todaysDate, startDate) != -1 &&
					reminderfox.core.compareDates(todaysDate, endDate) != 1) {
						reminderArray[0] = reminder;
					}
				}

				return reminderArray;
			}
			else {
				reminderArray[0] = reminder;
				return reminderArray;
			}
	}
	else
		if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_YEARLY) {
			yearReminder = reminderfox.core.getFirstReminderOccurrenceAfterStartDate(reminder, startDate);
			if (yearReminder) {
				if (reminderfox.core.compareDates(yearReminder.date, endDate) == 1) {
					// return nothing if the reminder is outside of the ending date
					return reminderArray;
				}
				else {
					reminderArray[0] = yearReminder;
					return reminderArray;
				}
			}
			return reminderArray;
		}
		else
			if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_YEARLY_DAY) {
				yearReminder = reminderfox.core.getFirstReminderOccurrenceAfterStartDate(reminder, startDate);

				if (yearReminder) {
					if (reminderfox.core.compareDates(yearReminder.date, endDate) == 1) {
						// return nothing if the reminder is outside of the ending date
						return reminderArray;
					}
					else {
						reminderArray[0] = yearReminder;
						return reminderArray;
					}
				}
				return reminderArray;
			}
			else
				if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_MONTHLY_DATE) {
					arrayIndex = 0;
					monthReminder = reminderfox.core.getFirstReminderOccurrenceAfterStartDate(reminder, startDate);
					if (monthReminder) {
						if (reminderfox.core.compareDates(monthReminder.date, endDate) == 1) {
							// return nothing if the reminder is outside of the ending date
							return reminderArray;
						}


						interval = 1;
						if (reminder.recurrence.interval) {
							interval = reminder.recurrence.interval;
						}

						while (reminderfox.core.compareDates(monthReminder.date, endDate) != 1) {
							reminderArray[arrayIndex] = monthReminder;
							monthReminder = reminderfox.core.getNextReminderOccurrence(monthReminder, reminder.date, 0, interval);
							arrayIndex++;
						}
					}
					return reminderArray;
				}
				else
					if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_MONTHLY_DAY) {
						arrayIndex = 0;
						monthReminder = reminderfox.core.getFirstReminderOccurrenceAfterStartDate(reminder, startDate);
						if (monthReminder) {
							if (reminderfox.core.compareDates(monthReminder.date, endDate) == 1) {
								// return nothing if the reminder is outside of the ending date
								return reminderArray;
							}
							weekNumber = reminderfox.date.getWeekNumber(reminder.date);
							interval = 1;
							if (reminder.recurrence.interval) {
								interval = reminder.recurrence.interval;
							}
							while (reminderfox.core.compareDates(monthReminder.date, endDate) != 1) {
								reminderArray[arrayIndex] = monthReminder;
								monthReminder = reminderfox.core.getNextReminderOccurrence(monthReminder, reminder.date, weekNumber, interval);
								arrayIndex++;
							}
						}
						return reminderArray;

					}
					else
						if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_WEEKLY) {
							arrayIndex = 0;
							weeklyReminder = reminderfox.core.getFirstReminderOccurrenceAfterStartDate(reminder, startDate);
							if (weeklyReminder) {
								if (reminderfox.core.compareDates(weeklyReminder.date, endDate) == 1) {
									// return nothing if the reminder is outside of the ending date
									return reminderArray;
								}

								result = reminderfox.core.getDayAndEndDayOfYear(weeklyReminder, endDate);
								dayOfYear = result.dayResult;
								endDayOfYear = result.endResult;

								endIndex = 365;
								if (limitWeeklyReminders) {
									endIndex = 8;
								}

								interval = 1;
								if (reminder.recurrence.interval && reminder.recurrence.interval > 1) { // 2
									interval = reminder.recurrence.interval;
								}
								interval = 7 * interval; // to get weeks
								if (reminder.recurrence.byDay && reminder.recurrence.byDay.indexOf(",") != -1) {
									while (dayOfYear <= endDayOfYear && arrayIndex < endIndex) {
										reminderDay = weeklyReminder.date.getDay();
										origDate = weeklyReminder.date.getDate();
										weeklyReminder = reminderfox.core.cloneReminderFoxEvent(weeklyReminder);
										while (reminderDay < 7 && dayOfYear <= endDayOfYear && arrayIndex < endIndex) {
											if (reminderfox.core.isDayInByDayList(reminderDay, reminder.recurrence.byDay)) {
												reminderArray[arrayIndex] = weeklyReminder;
												arrayIndex++;
											}
											weeklyReminder = reminderfox.core.cloneReminderFoxEvent(weeklyReminder);
											weeklyReminder.date.setDate(weeklyReminder.date.getDate() + 1);
											reminderDay++;
											dayOfYear++;
										}
										weeklyReminder = reminderfox.core.cloneReminderFoxEvent(weeklyReminder);
										weeklyReminder.date = new Date(weeklyReminder.date.getFullYear(), weeklyReminder.date.getMonth(), weeklyReminder.date.getDate() + (interval - 7), weeklyReminder.date.getHours(), weeklyReminder.date.getMinutes());
										dayOfYear = dayOfYear + (interval - 7); // -7 b/c end of this week
									}
								}
								else {
									while (dayOfYear <= endDayOfYear && arrayIndex < endIndex) {
										reminderArray[arrayIndex] = weeklyReminder;

										weeklyReminder = reminderfox.core.cloneReminderFoxEvent(weeklyReminder);
										weeklyReminder.date = new Date(weeklyReminder.date.getFullYear(), weeklyReminder.date.getMonth(), weeklyReminder.date.getDate() + interval, weeklyReminder.date.getHours(), weeklyReminder.date.getMinutes());
										arrayIndex++;
										dayOfYear = dayOfYear + interval;

									}
								}
							}

							return reminderArray;
						}
						else
							if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_DAILY) {
								arrayIndex = 0;
								dailyReminder = reminderfox.core.getFirstReminderOccurrenceAfterStartDate(reminder, startDate);

								if (dailyReminder) {
									if (reminderfox.core.compareDates(dailyReminder.date, endDate) == 1) {
										// return nothing if the reminder is outside of the ending date
										return reminderArray;
									}

									result = reminderfox.core.getDayAndEndDayOfYear(dailyReminder, endDate);
									dayOfYear = result.dayResult;
									endDayOfYear = result.endResult;

									interval = 1;
									if (reminder.recurrence.interval) {
										interval = reminder.recurrence.interval;
									}

									endIndex = 365;
									if (limitWeeklyReminders) {
										endIndex = 8;
									}
									while (dayOfYear <= endDayOfYear && arrayIndex < endIndex) {
										reminderArray[arrayIndex] = dailyReminder;

										dailyReminder = reminderfox.core.cloneReminderFoxEvent(dailyReminder);
										dailyReminder.date = new Date(dailyReminder.date.getFullYear(), dailyReminder.date.getMonth(), dailyReminder.date.getDate() + interval, dailyReminder.date.getHours(), dailyReminder.date.getMinutes());
										arrayIndex++;
										dayOfYear = dayOfYear + interval;
									}
								}
								return reminderArray;
							}
	return null;
};

reminderfox.core.getFirstDayValueFromByDay= function(byday){
	var commaIndex = byday.indexOf(",");
	var firstDay;
	if (commaIndex == -1) {
		firstDay = byday;
	}
	else {
		firstDay = byday.substring(0, commaIndex);
	}

	if (firstDay == "SU") {
		return 0;
	}
	else
		if (firstDay == "MO") {
			return 1;
		}
		else
			if (firstDay == "TU") {
				return 2;
			}
			else
				if (firstDay == "WE") {
					return 3;
				}
				else
					if (firstDay == "TH") {
						return 4;
					}
					else
						if (firstDay == "FR") {
							return 5;
						}
						else
							if (firstDay == "SA") {
								return 6;
							}
							else {
								return -1;
							}
};

reminderfox.core.getThisDayFromCurrentWeeklyReminder= function(reminder, targetDay){ // this will see the current day, and move forward/back to get to the specified day
	var dateDay = reminder.date.getDay();
	if (dateDay == targetDay) {
		return reminder;
	}
	else
		if (dateDay < targetDay) {
			reminder.date.setDate(reminder.date.getDate() + (targetDay - dateDay));
		}
		else
			if (dateDay > targetDay) {
				reminder.date.setDate(reminder.date.getDate() - (dateDay - targetDay));
			}
	return reminder;
};

reminderfox.core.getThisDayFromCurrentDate= function(currentDate, targetDay){ // this will see the current day, and move forward/back to get to the specified day
	var dateDay = currentDate.getDay();
	if (dateDay == targetDay) {
		return currentDate;
	}
	else
		if (dateDay < targetDay) {
			currentDate.setDate(currentDate.getDate() + (targetDay - dateDay));
		}
		else
			if (dateDay > targetDay) {
				currentDate.setDate(currentDate.getDate() - (dateDay - targetDay));
			}

	return currentDate;
};


reminderfox.core.getDayAndEndDayOfYear= function(weeklyReminder, endDate){
	var dayArray;
	var month = weeklyReminder.date.getMonth();
	var day = weeklyReminder.date.getDate();
	var currentYear = weeklyReminder.date.getFullYear();
	if (reminderfox.date.isLeapYear(currentYear)) {
		dayArray = reminderfox.consts.lDOMonth;
	}
	else {
		dayArray = reminderfox.consts.DOMonth;
	}

	var dayOfYear = 0;
	for (var i = 0; i < month; i++) {
		dayOfYear += dayArray[i];
	}
	dayOfYear += day;

	var endDayOfYear = 0;
	if (endDate.getFullYear() != currentYear) {
		if (reminderfox.date.isLeapYear(endDate.getFullYear())) {
			dayArray = reminderfox.consts.lDOMonth;
		}
		else {
			dayArray = reminderfox.consts.DOMonth;
		}
		endDayOfYear += 365;
	}
	month = endDate.getMonth();
	day = endDate.getDate();

	for (i = 0; i < month; i++) {
		endDayOfYear += dayArray[i];
	}
	endDayOfYear += day;
	var result = {
		dayResult: dayOfYear,
		endResult: endDayOfYear
	};
	return result;
};


reminderfox.core.compareReminderDatesAndTimes= function(reminder1, reminder2, dateOne, dateTwo){
	if (!dateOne) {
		dateOne = reminder1.date;
	}
	if (!dateTwo) {
		dateTwo = reminder2.date;
	}
	var compare = reminderfox.core.compareDates(dateOne, dateTwo);
	if (compare === 0) {
		if (dateOne.getHours() < dateTwo.getHours()) {
			// we want allDayEvents to occur after specific time events
			if (reminder1.allDayEvent) {
				return 1;
			}
			else {
				return -1;
			}
		}
		else
			if (dateOne.getHours() > dateTwo.getHours()) {
				// we want allDayEvents to occur after specific time events
				if (reminder2.allDayEvent) {
					return -1;
				}
				else {
					return 1;
				}
			}
			else {
				if (dateOne.getMinutes() < dateTwo.getMinutes()) {
					return -1;
				}
				else
					if (dateOne.getMinutes() > dateTwo.getMinutes()) {
						return 1;
					}
					else {
						if (dateOne.getSeconds() < dateTwo.getSeconds()) {
							return -1;
						}
						else
							if (dateOne.getSeconds() > dateTwo.getSeconds()) {
								return 1;
							}
							else {
								return 0; // identical times
							}
					}
			}
	}

	return compare;
};

/**
 *  Compare Dates
 *   @param {date} dateOne
 *   @param {date} dateTwo
 *   @return: {integer} -1 = if dateOne < dateTwo
 *      0 = if equal
 *      1 = dateOne > dateTwo
 */
reminderfox.core.compareDates= function(dateOne, dateTwo){
	if (!dateOne && dateTwo) {
		return -1;
	}
	if (!dateTwo && dateOne) {
		return 1;
	}
	if (!dateOne && !dateTwo) {
		return 0;
	}

	var t1 = dateOne.getTime();
	var t2 = dateTwo.getTime();

	// Calculate the difference in milliseconds
	var difference_ms = t1 - t2;

	// if within one day, check to see if the dates are the same
	if (difference_ms !== 0 && difference_ms <= reminderfox.consts.ONE_DAY &&
	difference_ms >= reminderfox.consts.NEGATIVE_ONE_DAY) {
		if (dateOne.getDate() == dateTwo.getDate()) {
			return 0;
		}
	}

	if (t1 < t2) {
		return -1;
	}
	else
		if (t1 > t2) {
			return 1;
		}
		else {
			return 0;
		}
};


reminderfox.core.getFileTimeStamp= function(){
	var file = reminderfox.core.getReminderStoreFile();

	// bail if the file doesn't yet exist; no reminders to read
	if (!file.exists()) {
		return -1;
	}

	var is = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
	try {
		is.init(file, 0x01, 00004, null);
	}
	catch (e) {
		reminderfox.core.logMessageLevel("Could not read reminder file: " + e.name +
		" -- " +
		e.message, reminderfox.consts.LOG_LEVEL_INFO);
		return -1;
	}

	var scriptableStream = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(Components.interfaces.nsIScriptableInputStream);
	scriptableStream.init(is);
	var chunk = scriptableStream.read(scriptableStream.available());

	// maybe only read set # of bytes
	return reminderfox.core.getFileTimeStampFromString(chunk);
};


reminderfox.core.getFileTimeStampFromString= function(chunk){
	var index = chunk.indexOf(reminderfox.consts.REMINDERFOX_FILE_LAST_MODIFIED);
	if (index != -1) {
		var newline = "\n";
		var returnLine = "\r";
		index = chunk.indexOf(':', index);
		if (index != -1) {
			var endIndex = chunk.indexOf(newline, index);
			var time = chunk.substring(index + 1, endIndex);
			if (time.charAt(time.length - 1) == returnLine) {
				time = time.substring(0, time.length - 1);
			}
			return reminderfox.util.trim(time);
		}
	}
	return -1;
};


/**
 *   Get all Reminders (events and todos) to arrays:
 *   -- reminderfox.core.reminderFoxEvent
 *   -- reminderfox.core.reminderFoxTodosArray
 *   -- reminderfox.core.numDaysEvents  (used with calendar-grid
 *   -- reminderfox.core.numDaysTodos  (used with calendar-grid
 *  If not in memeory, read ICS file and parse
 *  @param clear {boolean}  used with  reminderfox_revertActions() to clear all arrays
 */
reminderfox.core.getReminderEvents= function(clear){

		var tab = reminderfox.tabInfo.tabName;
		var tabID = reminderfox.tabInfo.tabID;
		var tabIndex = reminderfox.tabInfo.tabIndex;


	var isSubscription = reminderfox_isSubscribedCalendarTabSelected();
	// reminderfox.util.Logger('ALERT', "  core.getReminderEvents   clear: " + clear)
	if (isSubscription && (tabID != 'Xreminder')) { // this is a Subscription and NOT reminders

		tab = reminderfox.tabInfo.tabName;
		tabID = reminderfox.tabInfo.tabID;
		tabIndex = reminderfox.tabInfo.tabIndex;

		var subscribedCalArr = getSubscribedCalendars();

		var subscribedCal = subscribedCalArr[tab];
		if (!subscribedCal) {
			// download this subscription...
			subscribedCal = new Array();
			subscribedCalArr[tab] = subscribedCal;
			// start downloading in background
			setTimeout(reminderFox_downloadSubscribedCalendar, 1, tab, subscribedCal);
		}
		reminderfox_getNumDaysModel(subscribedCal);
		return subscribedCal;
	}

	else  { // not subscription
		if ((!reminderfox.core.reminderFoxEvents) || clear) {
			reminderfox.core.reminderFoxEvents = new Array();
			reminderfox.core.reminderFoxTodosArray = {};

			reminderfox.core.reminderFoxExtraInfoPrefix = "";

			reminderfox.core.numDaysEvents = [];
			reminderfox.core.numDaysTodos = [];

			var file = reminderfox.core.getReminderStoreFile();
			// bail if the file doesn't yet exist; no reminders to read
			if (!file.exists()) {
				reminderfox_getNumDaysModel(reminderfox.core.reminderFoxEvents);
				return reminderfox.core.reminderFoxEvents;
			}
			reminderfox.core.readInRemindersAndTodosICSFromFile(reminderfox.core.reminderFoxEvents, reminderfox.core.reminderFoxTodosArray, file);
		}
		reminderfox_getNumDaysModel(reminderfox.core.reminderFoxEvents);
		return reminderfox.core.reminderFoxEvents;
	}
};

/**
 * Generate the 'numDaysEvents' array for a 'reminders' array
 */
function reminderfox_getNumDaysModel(reminders) {
	var namType = 'numDaysEvents';
	reminderfox.core[namType] = [];

	for (var n= 0; n < reminders.length; n++) {
		reminderfox.core.numDaysModelAdd (reminders[n], namType);
	}
	// reminderfox.util.Logger('Alert', "getNumDaysModel  in Core:  reminders#: " + reminders.length)
}


reminderfox.core.getReminderTodos= function(){
//	var msg =" #### reminderfox.core.getReminderTodos ##### ";
//  reminderfox.util.Logger('calDAV',  msg);
	if (!reminderfox.core.reminderFoxTodosArray) {
		reminderfox.core.reminderFoxEvents = new Array();
		reminderfox.core.reminderFoxTodosArray = {};
		var file = reminderfox.core.getReminderStoreFile();

		// bail if the file doesn't yet exist; no reminders to read
		if (!file.exists()) {
			return reminderfox.core.reminderFoxTodosArray;
		}
		reminderfox.core.readInRemindersAndTodosICSFromFile(reminderfox.core.reminderFoxEvents, reminderfox.core.reminderFoxTodosArray, file);
	}
	return reminderfox.core.reminderFoxTodosArray;
};


reminderfox.core.clearRemindersAndTodos= function(){
reminderfox.util.Logger('checkData', ".core.clearRemindersAndTodos");		//gWcheckData

	reminderfox.core.reminderFoxEvents = null;
	reminderfox.core.reminderFoxTodosArray = null;

	reminderfox.core.numDaysEvents = [];
	reminderfox.core.numDaysTodos = [];
};


//reminderfox.core.readRemindersAndTodosAndCalDAV= function(){
//	reminderfox.core.clearRemindersAndTodos();

//	var file = reminderfox.core.getReminderStoreFile();

	// bail if the file doesn't yet exist; no reminders to read
//	if (!file.exists()) {
//		return reminderfox.core.reminderFoxTodosArray;
//	}
//	reminderfox.core.readInRemindersAndTodosICSFromFile(reminderfox.core.reminderFoxEvents, reminderfox.core.reminderFoxTodosArray, file);
//};



reminderfox.core.getRemindersById= function(id, reminders){

	if (!reminders) {
		reminders = reminderfox.core.getReminderEvents();
	}
	for (var i = 0; i < reminders.length; i++) {
		if (reminders[i].id == id) {
			return reminders[i];
		}
	}
	return null;
};

reminderfox.core.getTodosById= function(id, todoList){
	if (todoList) {
		for (var i = 0; i < todoList.length; i++) {
			if (todoList[i].id == id) {
				return todoList[i];
			}
		}
	}
	return null;
};

reminderfox.core.getSpecificTodoById= function(id){
	var i;
	var _todosArray = reminderfox.core.getReminderTodos();
	for (var n in _todosArray) {
		var reminderTodos = _todosArray[n];
		for (i = 0; i < reminderTodos.length; i++) {
			if (reminderTodos[i].id == id) {
				return reminderTodos[i];
			}
		}
	}
	return null;
};


reminderfox.core.initiliazeTooltip= function(){
	var changed = reminderfox.core.ensureRemindersSynchronized();
	if (!changed) {
		// add some extra checks in when hiding tooltip; in case the setTimeout threads have been suspended,
		// this will kick them off again if neccessary
        // 08/03/2014 update: now using reminderfox.overlay.timerObject which should be reliable and do not need
        // these checks like we did to kick off setTimeout's if they failed
		//reminderfox.overlay.initializeReminderFoxHourly();

		//reminderfox.core.filesystemTimeStampHasChanged
	}
	reminderfox.core.logMessageLevel("Tooltip initialized: " + new Date(), reminderfox.consts.LOG_LEVEL_FINE);
};

reminderfox.core.hideTooltip= function(){
	// 07/28/14: using setinterval for alert slider now; do not need
	// to manually call (which was being done to ensure that alert slider
	// timer would be run in the event that the setTimeout stopped working)
	//reminderfox.overlay.showAlertSlider();
};


reminderfox.core.ensureRemindersSynchronized= function(){
	var fileChanged = reminderfox.core.timeStampHasChanged();

	if (fileChanged != -1) {
		var changed = false;
		try {
			var waitForResponse = reminderfox.overlay.ensureRemoteRemindersSynchronized(true);
			if (!waitForResponse) {
				changed = reminderfox.overlay.processRecentReminders();
			}
		}
		catch (e) {
		}

		if (changed) {
			// write stuff out
			reminderfox.core.writeOutRemindersAndTodos(false);		// goes for:  syncWrittenChangesToRemote
			reminderfox.core.syncWrittenChangesToRemote();
		}
		else {
			reminderfox.core.storeTimeStamp(fileChanged);
		}

		var windowEnumerator = reminderfox.core.getWindowEnumerator();
		if (windowEnumerator.hasMoreElements()) {
			var oldestWindow = windowEnumerator.getNext();
			oldestWindow.reminderfox.overlay.updateRemindersInWindow();
			reminderfox.core.clearRemindersAndTodos();

			while (windowEnumerator.hasMoreElements()) {
				var currentWindow = windowEnumerator.getNext();
				currentWindow.reminderfox.overlay.updateRemindersInWindow();
				currentWindow.reminderfox.core.clearRemindersAndTodos();
			}
		}
	}
	return fileChanged != -1;
};


/*
 * check the reminder description for any variables (eg: <1978>) that needs translating
 *
 * My <1978> event == My 31st event
 * My <1978#> event == My 31 event
 *
 * (maybe:
 * My <1#> event == My 1 event  (increases each year)
 *   -- or <#1>  - but how would I know to increment each one?
 */
reminderfox.core.processReminderDescription= function(reminder, year, isTodo){
	var index = reminder.summary.indexOf("<");
	if (index != -1) {
		var endIndex = reminder.summary.indexOf(">", index + 1);
		if (endIndex != -1) {
			var useYearOnly = false;
			var yearVal = reminder.summary.substring(index + 1, endIndex);
			if (yearVal.length == 5 && yearVal.charAt(4) == '#') {
				yearVal = yearVal.substring(0, 4);
				useYearOnly = true;
			}
			if (yearVal.length == 4) {
				try {
					if (!reminderfox.util.isInteger(yearVal)) {
						return reminder;
					}
					var yearInt = parseInt(yearVal, 10);
					var currentYear = year;
					if (!currentYear) {
						currentYear = new Date().getFullYear();
					}

					var numOfYears = currentYear - yearInt;
					if (numOfYears < 0) {
						numOfYears = numOfYears * -1; // convert negative years to positive
					}
					var numOfYearsStr = numOfYears + "";
					if (!useYearOnly) {
						if (numOfYears > 0 && numOfYears < 32) {
							numOfYearsStr = reminderfox.string("rf.options.dateshort." + numOfYears + ".name");
						}
						else {
							var length = numOfYearsStr.length;

							if (numOfYearsStr.lastIndexOf("11") != -1 && numOfYearsStr.lastIndexOf("11") == length - 2) {
								numOfYearsStr = numOfYearsStr + reminderfox.string("rf.options.number.abbreviation.4");
							}
							else
								if (numOfYearsStr.lastIndexOf("12") != -1 && numOfYearsStr.lastIndexOf("12") == length - 2) {
									numOfYearsStr = numOfYearsStr + reminderfox.string("rf.options.number.abbreviation.4");
								}
								else
									if (numOfYearsStr.lastIndexOf("13") != -1 && numOfYearsStr.lastIndexOf("13") == length - 2) {
										numOfYearsStr = numOfYearsStr + reminderfox.string("rf.options.number.abbreviation.4");
									}
									else
										if (numOfYearsStr.lastIndexOf("1") != -1 && numOfYearsStr.lastIndexOf("1") == length - 1) {
											numOfYearsStr = numOfYearsStr + reminderfox.string("rf.options.number.abbreviation.1");
										}
										else
											if (numOfYearsStr.lastIndexOf("2") != -1 && numOfYearsStr.lastIndexOf("2") == length - 1) {
												numOfYearsStr = numOfYearsStr + reminderfox.string("rf.options.number.abbreviation.2");
											}
											else
												if (numOfYearsStr.lastIndexOf("3") != -1 && numOfYearsStr.lastIndexOf("3") == length - 1) {
													numOfYearsStr = numOfYearsStr + reminderfox.string("rf.options.number.abbreviation.3");
												}
												else {
													numOfYearsStr = numOfYearsStr + reminderfox.string("rf.options.number.abbreviation.4");
												}
						}
					}

					var returnReminder;
					if (isTodo) {
						returnReminder = reminderfox.core.cloneReminderFoxTodo(reminder);
					}
					else {
						returnReminder = reminderfox.core.cloneReminderFoxEvent(reminder);
					}
					returnReminder.summary = returnReminder.summary.substring(0, index) + numOfYearsStr +
					returnReminder.summary.substring(endIndex + 1);

					// now we have the new description; re-run the process  in case there were multiple years
					returnReminder = reminderfox.core.processReminderDescription(returnReminder, year, isTodo);
					return returnReminder;
				}
				catch (e) {
				}
			}
		}
	}
	return reminder;
};


reminderfox.core.constructReminderOutput= function(reminderEvents, _todosArray, isExport, ignoreExtraInfo, postingMethod){
	var newline, currentDate;

	if (navigator.appVersion.lastIndexOf('Win') != -1) {
		newline = "\r\n";
	}
	else {
		newline = "\n";
	}
	var separator = ":";

	var outputStr = "BEGIN:VCALENDAR" + newline;
	outputStr += "VERSION" + separator +
	"2.0" +
	newline;
	outputStr += "PRODID" + separator +
	"-//ReminderFox V" +
	reminderfox.consts.MIGRATED_PREF_VERSION +
	"//EN" +
	newline;
	var modifiedTime;

	// if exporting (via file or network), use existing timestamp
	if (isExport) {
		modifiedTime = reminderfox._prefsBranch.getCharPref(reminderfox.consts.LAST_MODIFIED) + "";
	}
	else {
		// otherwise, we're writing the file anew - set new current timestamp
		reminderfox.core.reminderFox_lastModifiedTime = new Date().getTime();
		modifiedTime = reminderfox.core.reminderFox_lastModifiedTime;
	}
	outputStr += reminderfox.consts.REMINDERFOX_FILE_LAST_MODIFIED + separator + modifiedTime + newline;

	//postingMethod
/*-----------------
	if (postingMethod === "" || postingMethod || postingMethod == "PUBLISH") { // for Invitation :  REQUEST
		outputStr += "METHOD" + separator + "PUBLISH" + newline;
	}
	else {
		outputStr += "METHOD" + separator + postingMethod + newline;
	}
-------------*/

	if (postingMethod) { // for Invitation :  REQUEST
		outputStr += "METHOD" + separator + postingMethod + newline;
	}


	// output any preamble extra info (like timezones):
	if (ignoreExtraInfo) {
		// ignore extra fields
	}
	else
		if (reminderfox.core.reminderFoxExtraInfoPrefix) {
			var extraInfoArray = reminderfox.core.reminderFoxExtraInfoPrefix.split("\\n");
			for (var index = 0; index < extraInfoArray.length; index++) {
				var extraInfo = extraInfoArray[index];
				outputStr += extraInfo + newline;
			}
		}

	// REMINDERS
	var reminder;
	if (reminderEvents){
		for (var i = 0; i < reminderEvents.length; i++) {
			reminder = reminderEvents[i];
			var summary = reminder.summary;
			outputStr += "BEGIN:VEVENT" + newline;
			outputStr += "UID" + separator + reminder.id + newline;
	
			//reminderfox.core.logMessageLevel("Writing out event: " + summary, reminderfox.consts.LOG_LEVEL_DEBUG);
	
			if (summary) {
				summary = reminderfox.util.escapeCommas(summary);
			}
			else {
				summary = "";
			}
			outputStr += reminderfox.util.foldLines("SUMMARY" + separator + summary, newline);
			if (isExport && (!reminder.extraInfo || reminder.extraInfo.indexOf("CLASS" + separator) == -1)) {
				outputStr += "CLASS" + separator + "PUBLIC" + newline;
			}
	
			// set date
			currentDate = new Date(reminder.date.getFullYear(), reminder.date.getMonth(), reminder.date.getDate(), reminder.date.getHours(), reminder.date.getMinutes());
			outputStr += reminderfox.core.createStringForDate(reminder, currentDate, isExport, separator, newline);
	
			var endDate = null;
			if (reminder.endDate) {
				endDate = new Date(reminder.endDate.getFullYear(), reminder.endDate.getMonth(), reminder.endDate.getDate(), reminder.endDate.getHours(), reminder.endDate.getMinutes());
			}
			outputStr += reminderfox.core.createStringForEndDate(reminder, endDate, isExport, separator, newline);
	
			if (isExport && (!reminder.extraInfo || reminder.extraInfo.indexOf("STATUS:") == -1)) {
				outputStr += "STATUS:CONFIRMED" + newline;
			}
	
			if (reminder.notes) {
				// replace actual new line  with newline characters
				var desc = reminder.notes.replace(new RegExp(/\n/g), "\\n");
				desc = reminderfox.util.escapeCommas(desc);
				outputStr += reminderfox.util.foldLines("DESCRIPTION" + separator + desc, newline);
			}
	
			if ((reminder.categories) && (reminder.categories !== "")) {
				var cString = reminderfox.util.foldLines("CATEGORIES" + separator + reminder.categories, newline);
				outputStr += cString;
				outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + cString;
			}
	
			outputStr += reminderfox.core.writeOutRecurrence(reminder, currentDate, separator, newline);
	
			if (reminder.priority == reminderfox.consts.PRIORITY_IMPORTANT) {
				outputStr += "PRIORITY" + separator + "1" + newline;
				outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + "PRIORITY" + separator + "1" + newline;
			}
	
			if (reminder.lastModified) {
				outputStr += "LAST-MODIFIED" + separator + reminder.lastModified + newline;
			}
	
			if (reminder.remindUntilCompleted != reminderfox.consts.REMIND_UNTIL_COMPLETE_NONE) {
				outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + "REMIND-UNTIL-COMPLETED" + separator +
				reminder.remindUntilCompleted +
				newline;
			}
	
			if (reminder.location && reminder.location !== "") {
				var reminderLocation = reminderfox.util.escapeCommas(reminder.location);
				outputStr += reminderfox.util.foldLines("LOCATION" + separator + reminderLocation, newline);
			}
			if (reminder.url && reminder.url !== "") {
				outputStr += reminderfox.util.foldLines("URL" + separator + reminder.url, newline);
			}
	
	
			if (reminder.completedDate) {
				var year = reminder.completedDate.getFullYear();
				var month = reminder.completedDate.getMonth() + 1;
				var day = reminder.completedDate.getDate();
				if (month < 10)
					month = "0" + month;
				if (day < 10)
					day = "0" + day;
				outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + "COMPLETED" + separator +
				"" +
				year +
				month +
				day +
				newline;
			}
	
			if (reminder.messageID) {
				outputStr += reminderfox.util.foldLines(reminderfox.consts.REMINDER_FOX_EXTENDED 
					+ "MESSAGEID" + separator + reminder.messageID, newline);
			}
	
			if ((reminder.calDAVid) && (reminder.calDAVid !== "")) {
				outputStr += reminderfox.util.foldLines(reminderfox.consts.REMINDER_FOX_EXTENDED 
					+ "CALDAVID" + separator + reminder.calDAVid, newline);
			}
	
			// write out extra info
			var dtstampFound = false;
			if (reminder.extraInfo) {
				// write out any extra info (inserted from other calendaring programs)
				var extraInfoArray = reminder.extraInfo.split("\\n");
				for (var index = 0; index < extraInfoArray.length; index++) {
					var extraInfo = extraInfoArray[index];
	
					if (extraInfo.indexOf("DTSTAMP") != -1) {
						dtstampFound = true;
					}
					else
						if (extraInfo.indexOf("COMMENT") != -1) {
							extraInfo = extraInfo.replace(new RegExp(/\n/g), "\\n");
						}
					outputStr += reminderfox.util.foldLines(extraInfo, newline);
				}
			}
	
			if (!dtstampFound) {
				if (!reminder.lastModified) {
					currentDate = new Date();
					reminder.lastModified = reminderfox.date.getDateAsString(currentDate);
				}
				outputStr += "DTSTAMP" + separator + reminder.lastModified + newline;
			}
	
			if (reminder.alarm) {
				outputStr += "BEGIN:VALARM" + newline;
				outputStr += "TRIGGER" + separator +
				reminder.alarm +
				newline;
				outputStr += "ACTION" + separator + "DISPLAY" + newline;
				outputStr += reminderfox.util.foldLines("DESCRIPTION" + separator + summary, newline);
	
				if (reminder.alarmLastAcknowledge) {
					outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + "LASTACK" + separator + reminder.alarmLastAcknowledge + newline;
				}
				if (reminder.snoozeTime) {
					outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + "SNOOZE-TIME" + separator + reminder.snoozeTime + newline;
				}
	
				outputStr += "END:VALARM" + newline;
			}
	
			outputStr += "END:VEVENT" + newline;
		}
	}

	// TODOs
	var todo;
	var dtstampStr = null;
	var tLen = 0;
	for (var n in _todosArray) {
		var reminderTodos = _todosArray[n];
		for (var i = 0; i < reminderTodos.length; i++) {
			todo = reminderTodos[i];
			outputStr += "BEGIN:VTODO" + newline;
			var summary = reminderfox.util.escapeCommas(todo.summary);
			if (!summary) {
				summary = "";
			}
			outputStr += reminderfox.util.foldLines("SUMMARY" + separator + summary, newline);
			outputStr += reminderfox.util.foldLines("UID" + separator + todo.id, newline);

			if (todo.date) {
				currentDate = new Date(todo.date.getFullYear(), todo.date.getMonth(), todo.date.getDate(), todo.date.getHours(), todo.date.getMinutes());
				outputStr += reminderfox.core.createStringForDate(todo, currentDate, isExport, separator, newline);

				if (todo.endDate) {
					var durationMillisecs = todo.endDate.getTime() - todo.date.getTime();
					var durationMins = durationMillisecs / (60 * 1000);
					outputStr += "DURATION" + separator + "PT" + durationMins + "M" + newline;
				}
			}
			//currentDate.setMinutes( currentDate.getMinutes() + tzOffset );	// set this offset for UTC

			if (todo.notes) {
				// replace actual new line  with newline characters
				var desc = todo.notes.replace(new RegExp(/\n/g), "\\n");
				desc = reminderfox.util.escapeCommas(desc);
				outputStr += reminderfox.util.foldLines("DESCRIPTION" + separator + desc, newline);
			}

			if (todo.priority == reminderfox.consts.PRIORITY_IMPORTANT) {
				outputStr += "PRIORITY" + separator + "1" + newline;
				outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + "PRIORITY" + separator + "1" + newline;
			}

			//gWEditing
			if (todo.lastModified) {
				outputStr += "LAST-MODIFIED" + separator + todo.lastModified + newline;
			}

			if ((todo.categories) && (todo.categories !== "")) {
				var cString = reminderfox.util.foldLines("CATEGORIES" + separator + todo.categories, newline);
				outputStr += cString;
				outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + cString;
			}

			outputStr += reminderfox.core.writeOutRecurrence(todo, currentDate, separator, newline);

			if (todo.completedDate) {
				var year = todo.completedDate.getFullYear();
				var month = todo.completedDate.getMonth() + 1;
				var day = todo.completedDate.getDate();
				if (month < 10)
					month = "0" + month;
				if (day < 10)
					day = "0" + day;
				outputStr += "COMPLETED" + separator +
				"" +
				year +
				month +
				day +
				"T" +
				"000000" +
				newline;
			}


			if (todo.showInTooltip) {
				outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + "SHOW-IN-TOOLTIP" + separator +
				"1" + newline;
			}

			if (todo.messageID) {
				outputStr += reminderfox.util.foldLines(reminderfox.consts.REMINDER_FOX_EXTENDED + "MESSAGEID" + separator + todo.messageID, newline);
			}

			if ((todo.calDAVid) && (todo.calDAVid !== "")) {
				outputStr += reminderfox.util.foldLines(reminderfox.consts.REMINDER_FOX_EXTENDED 
					+ "CALDAVID" + separator + todo.calDAVid, newline);
			}

			// moved down after .extraInfo,  so a list name from extraInfo can be used
			//			if ( n != reminderfox.consts.DEFAULT_TODOS_CATEGORY ) {
			//				outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + "LISTID" + separator +  n  + newline;
			//			}

			if (todo.location && todo.location !== "") {
				var location = reminderfox.util.escapeCommas(todo.location);
				outputStr += reminderfox.util.foldLines("LOCATION" + separator + location, newline);
			}
			if (todo.url && todo.url !== "") {
				outputStr += reminderfox.util.foldLines("URL" + separator + todo.url, newline);
			}

			var extraFound = false;
			var dtstampFound = false;
			if (todo.extraInfo) {
				// write out any extra info (inserted from other calendaring programs)
				var extraInfoArray = todo.extraInfo.split("\\n");
				for (var index = 0; index < extraInfoArray.length; index++) {
					var extraInfo = extraInfoArray[index];
					outputStr += reminderfox.util.foldLines(extraInfo, newline);

					if (extraInfo.indexOf("DTSTAMP") != -1) {
						dtstampFound = true;
					}
					if (extraInfo.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "LISTID") != -1) {
						extraFound = true;
					}
				}
			}
			if (!todo.lastModified) {
				currentDate = new Date();
				todo.lastModified = reminderfox.date.getDateAsString(currentDate);
			}

			if (!dtstampFound) {
				outputStr += "DTSTAMP" + separator + todo.lastModified + newline;
			}

			// list name moved to here (after .extraInfo)
			if ((n != reminderfox.consts.DEFAULT_TODOS_CATEGORY) && (extraFound === false)) {
				outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + "LISTID" + separator + n + newline;
			}

			if (todo.alarm) {
				outputStr += "BEGIN:VALARM" + newline;
				outputStr += "TRIGGER" + separator + todo.alarm + newline;
				outputStr += "ACTION" + separator + "DISPLAY" + newline;
				outputStr += reminderfox.util.foldLines("DESCRIPTION" + separator + summary, newline);
				if (todo.alarmLastAcknowledge) {
					outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + "LASTACK" + separator + todo.alarmLastAcknowledge + newline;
				}
				if (todo.snoozeTime) {
					outputStr += reminderfox.consts.REMINDER_FOX_EXTENDED + "SNOOZE-TIME" + separator + todo.snoozeTime + newline;
				}
				outputStr += "END:VALARM" + newline;
			}
			outputStr += "END:VTODO" + newline;
			tLen++;
		}
	}

	//gWbackup&delete	add # of reminders
	var rLen = (reminderEvents) ? reminderEvents.length : 0;
	outputStr += "X-REMINDERFOX-SUMMARY:Events=" + rLen + " Todos=" + tLen +  newline;
	outputStr += "END:VCALENDAR" + newline;

reminderfox.util.Logger('checkData', " ---- .core.constructReminderOutput"
		+ " ..writes to file:  Events=" + rLen + " Todos=" + tLen);		//gWcheckData

	//reminderfox.core.logMessageLevel("Finished output to file.  Final file:\n***************\n\n" + outputStr, reminderfox.consts.LOG_LEVEL_DEBUG);
	return outputStr;
};


reminderfox.core.createStringForDate= function(reminderOrTodo, currentDate, isExport, separator, newline){
	var outputStr;
	var year = currentDate.getFullYear();
	var month = currentDate.getMonth() + 1;
	var day = currentDate.getDate();
	if (month < 10)
		month = "0" + month;
	if (day < 10)
		day = "0" + day;

	if (reminderOrTodo.allDayEvent) {
		outputStr = "DTSTART;VALUE=DATE" + separator +
		"" +
		year +
		month +
		day +
		newline;
	}
	else {
		var hours = currentDate.getHours();
		var minutes = currentDate.getMinutes();
		if (hours < 10)
			hours = "0" + hours;
		if (minutes < 10)
			minutes = "0" + minutes;

		outputStr = "DTSTART" + separator +
		"" +
		year +
		month +
		day +
		"T" +
		hours +
		minutes +
		"00" +
		newline;
	}
	return outputStr;
};


reminderfox.core.createStringForEndDate= function(reminderOrTodo, currentDate, isExport, separator, newline){
	var nullDate = false;
	if (!currentDate) {
		nullDate = true;
		currentDate = reminderOrTodo.date;
	}
	var outputStr = "";
	var year = currentDate.getFullYear();
	var month = currentDate.getMonth() + 1;
	var day = currentDate.getDate();
	if (month < 10)
		month = "0" + month;
	if (day < 10)
		day = "0" + day;

	if (reminderOrTodo.allDayEvent) {
		if (!nullDate) {
			outputStr = "DTEND;VALUE=DATE" + separator +
			"" +
			year +
			month +
			day +
			newline;
		}
		else
			if (isExport) {
				// if we are exporting reminders, then add the end-date for all day events because
				// some buggy clients don't understnand all-day events that have no end date even though
				// that is correct in the ICS spec
				currentDate.setDate(currentDate.getDate() + 1);
				year = currentDate.getFullYear();
				month = currentDate.getMonth() + 1;
				day = currentDate.getDate();
				if (month < 10)
					month = "0" + month;
				if (day < 10)
					day = "0" + day;
				outputStr += "DTEND;VALUE=DATE" + separator +
				"" +
				year +
				month +
				day +
				newline;
			}
	}
	else {
		var hours = currentDate.getHours();
		var minutes = currentDate.getMinutes();
		if (hours < 10)
			hours = "0" + hours;
		if (minutes < 10)
			minutes = "0" + minutes;

		if (!nullDate) {
			outputStr = "DTEND" + separator +
			"" +
			year +
			month +
			day +
			"T" +
			hours +
			minutes +
			"00" +
			newline;
		}
		else
			if (isExport) {
				currentDate.setHours(currentDate.getHours() + 1);
				year = currentDate.getFullYear();
				month = currentDate.getMonth() + 1;
				day = currentDate.getDate();
				if (month < 10)
					month = "0" + month;
				if (day < 10)
					day = "0" + day;
				hours = currentDate.getHours();
				minutes = currentDate.getMinutes();
				if (hours < 10)
					hours = "0" + hours;
				if (minutes < 10)
					minutes = "0" + minutes;
				outputStr += "DTEND" + separator +
				"" +
				year +
				month +
				day +
				"T" +
				hours +
				minutes +
				"00" +
				newline;
			}
	}
	return outputStr;
};


reminderfox.core.writeOutRemindersAndTodos= function(isExport){
reminderfox.util.Logger('checkData', ".core.writeOutRemindersAndTodos");		//gWcheckData

	var remindersToOutput = reminderfox.core.getReminderEvents();
	//§§§ 2014-02-16  var remindersToOutput = reminderfox.core.reminderFoxEvents;		//gWSaveReminders
	var outputStr = reminderfox.core.constructReminderOutput(remindersToOutput, 
		reminderfox.core.getReminderTodos(), isExport); //  ALL  todos

	// now write file out to filesystem
	var file = reminderfox.core.getReminderStoreFile();

	if (file.exists() === false) {
		file.create(Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420);
	}

	reminderfox.core.writeStringToFile(outputStr, file, false);
	reminderfox.calDAV.accountsWriteOut (reminderfox.calDAV.accounts);  // change reminderfox.calDAV.accounts
};


reminderfox.core.syncWrittenChangesToRemote= function(){
	// sync 'em up
	var networkSync = reminderfox.consts.NETWORK_SYNCHRONIZE_DEFAULT;
	try {
		networkSync = reminderfox._prefsBranch.getBoolPref(reminderfox.consts.NETWORK_SYNCHRONIZE);
	}
	catch (e) {
	}  reminderfox.util.Logger('networking', " .syncWrittenChangesToRemote   networkSync:" + networkSync);
	if (networkSync) {
		reminderfox.util.JS.dispatch('network');
		reminderfox.network.upload.reminderFox_upload_Startup_headless(reminderfox.consts.UI_MODE_HEADLESS_SHOW_ERRORS);
	}
};

reminderfox.core.uploadReminders= function(){		//XUL dialog for cancel
	var newOptions = {
		closeOnNoErrors: 1
	};
	window.openDialog('chrome://reminderFox/content/network/upload.xul', 'reminderFox-upload', 'modal, centerscreen', newOptions);
};

reminderfox.core.downloadReminders= function(){		//XUL dialog for cancel
	var newOptions = {
		closeOnNoErrors: 1
	};
	window.openDialog('chrome://reminderFox/content/network/download.xul', 'reminderFox-download', 'modal,centerscreen', newOptions);
};


reminderfox.core.writeStringToFile= function(outputStr, file, isExport){
	var outputStream = Components.classes["@mozilla.org/network/file-output-stream;1"]
		.createInstance(Components.interfaces.nsIFileOutputStream);
	outputStream.init(file, 0x04 | 0x08 | 0x20, 420, 0);

	var converter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"]
		.createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
	converter.charset = "UTF-8";

	var chunk = null;
	try {
		chunk = converter.ConvertFromUnicode(outputStr);
	}
	catch (e) {
		chunk = outputStr;
	}
	outputStream.write(chunk, chunk.length);

	var fin = converter.Finish();
	if (fin.length > 0)
		outputStream.write(fin, fin.length);
	outputStream.close();

	if (!isExport && reminderfox.core.reminderFox_lastModifiedTime) {
		reminderfox.core.storeTimeStamp(reminderfox.core.reminderFox_lastModifiedTime);
	}
};


reminderfox.core.appendStringToFile= function(outputStr, file, isExport){
	var outputStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
	outputStream.init(file, 0x02 | 0x10, 420, 0);

	var converter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"].createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
	converter.charset = "UTF-8";

	var chunk = null;
	try {
		chunk = converter.ConvertFromUnicode(outputStr);
	}
	catch (e) {
		chunk = outputStr;
	}
	outputStream.write(chunk, chunk.length);

	var fin = converter.Finish();
	if (fin.length > 0)
		outputStream.write(fin, fin.length);
	outputStream.close();

	if (!isExport && reminderfox.core.reminderFox_lastModifiedTime) {
		reminderfox.core.storeTimeStamp(reminderfox.core.reminderFox_lastModifiedTime);
	}
};

reminderfox.core.storeTimeStamp= function(lastModified){
	//var file = reminderfox.core.getReminderStoreFile();
	//var lastModified =  file.lastModifiedTime
	reminderfox._prefsBranch.setCharPref(reminderfox.consts.LAST_MODIFIED, lastModified);
	reminderfox.core.logMessageLevel("Store time stamp: " + new Date() + " -- " + lastModified, reminderfox.consts.LOG_LEVEL_INFO);
};

reminderfox.core.timeStampHasChanged= function(){
	var timestamp = reminderfox.core.getFileTimeStamp();
	var lastRecordedTimeStamp = reminderfox._prefsBranch.getCharPref(reminderfox.consts.LAST_MODIFIED) + "";
	//	currentTimeStamp =  file.lastModifiedTime;
	var fileChanged = lastRecordedTimeStamp != timestamp;
	reminderfox.core.logMessageLevel("TimeStamp Changed: " + new Date() + " - " + fileChanged + " --lastRecorded:" + lastRecordedTimeStamp + "--currentTimeStamp:" + timestamp + "-", reminderfox.consts.LOG_LEVEL_INFO);

	if (fileChanged) {
		return timestamp;
	}
	else {
		return -1;
	}
};

reminderfox.core.filesystemTimeStampHasChanged= function(){
	//var timestamp =	reminderfox.core.getFileTimeStamp()
	var lastRecordedTimeStamp = reminderfox._prefsBranch.getCharPref(reminderfox.consts.LAST_MODIFIED) + "";


	var file = reminderfox.core.getReminderStoreFile();

	// bail if the file doesn't yet exist; no reminders to read
	if (!file.exists()) {
		return -1;
	}
	var timestamp = file.lastModifiedTime;
	var fileChanged = lastRecordedTimeStamp != timestamp;
	reminderfox.core.logMessageLevel("FilesystemTimeStampHasChanged: " + new Date() + " - " + fileChanged + " --lastRecorded:" + lastRecordedTimeStamp + "--currentTimeStamp:" + timestamp + "-", reminderfox.consts.LOG_LEVEL_INFO);

	if (fileChanged) {
		return timestamp;
	}
	else {
		return -1;
	}

	// then do this...
	/* ------
		var windowEnumerator =  reminderfox.core.getWindowEnumerator();
		if (windowEnumerator.hasMoreElements()) {
			var oldestWindow = windowEnumerator.getNext();
			oldestWindow.reminderfox.overlay.updateRemindersInWindow();
			reminderfox.core.clearRemindersAndTodos();

			while (windowEnumerator.hasMoreElements()) {
				var currentWindow = windowEnumerator.getNext();
				currentWindow.reminderfox.overlay.updateRemindersInWindow();
				currentWindow.reminderfox.core.clearRemindersAndTodos();
			}
		}
	------*/
};

reminderfox.core.getQuickAlarms= function(){
	var quickAlarms = reminderfox.core.getUnicodePref(reminderfox.consts.QUICK_ALARMS);
	if (quickAlarms && quickAlarms.length > 0) {

		var quickAlarmArray = null;
		if (JSON) { // FF3.5+
			try { 
				quickAlarmArray = JSON.parse(quickAlarms);
			}
			catch( e) { 
				reminderfox.util.Logger('Alert', "Could not parse Quick Alarm JSON: " + e.name + "-- " + e.message + "\n" + e);
				quickAlarmArray = new Array();
			}
		}
		else {
			var nativeJSON = Components.classes["@mozilla.org/dom/json;1"].createInstance(Components.interfaces.nsIJSON);
			quickAlarmArray = nativeJSON.decode(quickAlarms);
		}

		return quickAlarmArray;
	}
	else {
		return new Array();
	}
};


reminderfox.core.updateQuickAlarmPref= function(quickAlarmArray){
	var quickAlarms = null;
	if (JSON) { // FF3.5+
		quickAlarms = JSON.stringify(quickAlarmArray);
	}
	else {
		var nativeJSON = Components.classes["@mozilla.org/dom/json;1"].createInstance(Components.interfaces.nsIJSON);
		quickAlarms = nativeJSON.encode(quickAlarmArray);
	}

	reminderfox.core.setUnicodePref(reminderfox.consts.QUICK_ALARMS, quickAlarms);
	reminderfox._prefs.savePrefFile(null);
};

reminderfox.core.removeQuickAlarm= function(quickAlarmText){
	var quickAlarmArray = reminderfox.core.getQuickAlarms();
	var indexToRemove = -1;
	for (var i = 0; i < quickAlarmArray.length; i++) {
		if (quickAlarmArray[i].text == quickAlarmText) {
			indexToRemove = i;
			break;
		}
	}

	if (indexToRemove > -1) {
		reminderfox.core.removeFromArray(quickAlarmArray, indexToRemove);
		reminderfox.core.updateQuickAlarmPref(quickAlarmArray);
	}
};

reminderfox.core.getQuickAlarm= function(quickAlarmText){
	var quickAlarmArray = reminderfox.core.getQuickAlarms();
	for (var i = 0; i < quickAlarmArray.length; i++) {
		if (quickAlarmArray[i].text == quickAlarmText) {
			return quickAlarmArray[i];
		}
	}
	return null;
};

reminderfox.core.updateQuickAlarm= function(quickAlarm){
	var quickAlarmArray = reminderfox.core.getQuickAlarms();
	var found = false;
	for (var i = 0; i < quickAlarmArray.length; i++) {
		if (quickAlarmArray[i].text == quickAlarm.text) {
			found = true;
			quickAlarmArray[i] = quickAlarm;
		}
	}

	if (!found) {
		quickAlarmArray[quickAlarmArray.length] = quickAlarm;
	}

	reminderfox.core.updateQuickAlarmPref(quickAlarmArray);
};


reminderfox.core.readInTimezone= function(reminderEvent, index, readIn, remindersArray){
	var colonIndex;
	var timezoneId = null;
	var inStandard = false;

	var standardRRule = null;
	var daylightRRule = null;

	var standardRDate = null;
	var daylightRDate = null;

	var standardDateStart = null;
	var daylightDateStart = null;

	var standardOffsetFrom = null;
	var daylightOffsetFrom = null;

	var standardOffsetTo = null;
	var daylightOffsetTo = null;

	var cTZstring = "";

	while (index < remindersArray.length && readIn != "END:VTIMEZONE") {

		cTZstring += readIn + "\n";

		if (readIn.indexOf("TZID") === 0) {
			colonIndex = readIn.indexOf(":");
			while (colonIndex == -1) {
				index++;
				readIn = remindersArray[index];
				colonIndex = readIn.indexOf(":");
			}
			timezoneId = readIn.substring(colonIndex + 1);
		}
		else
			if (readIn.indexOf("BEGIN:STANDARD") === 0) {
				inStandard = true;
			}
			else
				if (readIn.indexOf("END:STANDARD") === 0) {
					inStandard = false;
				}
				else
					if (readIn.indexOf("RRULE") === 0) {
						if (inStandard) {
							standardRRule = readIn;
						}
						else {
							daylightRRule = readIn;
						}
					}

					else
						if (readIn.indexOf("RDATE") === 0) {
							colonIndex = readIn.indexOf(":");
							while (colonIndex == -1) {
								index++;
								readIn = remindersArray[index];
								colonIndex = readIn.indexOf(":");
							}
							if (inStandard) {
								standardRDate = readIn.substring(colonIndex + 1);
							}
							else {
								daylightRDate = readIn.substring(colonIndex + 1);
							}
						}
						else
							if (readIn.indexOf("DTSTART") === 0) {
								colonIndex = readIn.indexOf(":");
								while (colonIndex == -1) {
									index++;
									readIn = remindersArray[index];
									colonIndex = readIn.indexOf(":");
								}
								if (inStandard) {
									standardDateStart = readIn.substring(colonIndex + 1);
								}
								else {
									daylightDateStart = readIn.substring(colonIndex + 1);
								}
							}

							else
								if (readIn.indexOf("TZOFFSETFROM") === 0) {
									colonIndex = readIn.indexOf(":");
									while (colonIndex == -1) {
										index++;
										readIn = remindersArray[index];
										colonIndex = readIn.indexOf(":");
									}
									if (inStandard) {
										standardOffsetFrom = readIn.substring(colonIndex + 1);
									}
									else {
										daylightOffsetFrom = readIn.substring(colonIndex + 1);
									}
								}

								else
									if (readIn.indexOf("TZOFFSETTO") === 0) {
										colonIndex = readIn.indexOf(":");
										while (colonIndex == -1) {
											index++;
											readIn = remindersArray[index];
											colonIndex = readIn.indexOf(":");
										}
										if (inStandard) {
											standardOffsetTo = readIn.substring(colonIndex + 1);
										}
										else {
											daylightOffsetTo = readIn.substring(colonIndex + 1);
										}
									}

		index++;
		readIn = remindersArray[index];
	}

	

	// let's calculate

	var standardDate = null;
	// read in standard date
	if (standardRRule) {

		standardDate = reminderfox.core.calculateRRule(standardRRule);

		if (standardDateStart) {
			var standardDateStartDate = reminderfox.date.getDateTimeFromString(standardDateStart);
			standardDate.setHours(standardDateStartDate.getHours());
			standardDate.setMinutes(standardDateStartDate.getMinutes());
			standardDate.setSeconds(standardDateStartDate.getSeconds());
		}
	}


	if (standardRDate) {
		// parsedate
		standardDate = reminderfox.date.getDateTimeFromString(standardRDate);
		// set to current year
		standardDate.setFullYear(new Date().getFullYear());
	}

	var daylightDate = null;
	if (daylightRRule) {
		daylightDate = reminderfox.core.calculateRRule(daylightRRule);

		if (daylightDateStart) {
			var daylightDateStartDate = reminderfox.date.getDateTimeFromString(daylightDateStart);
			daylightDate.setHours(daylightDateStartDate.getHours());
			daylightDate.setMinutes(daylightDateStartDate.getMinutes());
			daylightDate.setSeconds(daylightDateStartDate.getSeconds());
		}
	}

	if (daylightRDate) {
		// parsedate
		daylightDate = reminderfox.date.getDateTimeFromString(daylightRDate);
		// set to current year
		daylightDate.setFullYear(new Date().getFullYear());
	}

	//dump( "\ntimezoneid: " + timezoneId + "\nSTANDARD:" + standardDate + "\n\ndaylight: " + daylightDate );
	var inDST = false;


	if (standardDate && daylightDate) {
		var today = new Date();
		var compare = reminderfox.core.compareDates(standardDate, daylightDate);
		if (compare == -1) {
			var compareToday = reminderfox.core.compareDates(today, standardDate);
			if (compareToday == -1) {
				// we are in DST
				inDST = true;
			}
			else {
				compareToday = reminderfox.core.compareDates(today, daylightDate);
				if (compareToday == -1) {
					inDST = false;
				}
				else {
					inDST = true;
				}
			}
		}
		else {
			var compareToday = reminderfox.core.compareDates(today, daylightDate);
			if (compareToday == -1) {
				inDST = false;
			}
			else {
				compareToday = reminderfox.core.compareDates(today, standardDate);
				if (compareToday == -1) {
					inDST = true;
				}
				else {
			//		inDST = true;		//gW Bug#: 25257
					inDST = false;
				}
			}
		}
	}



	var offset = null;
	if (inDST) {
		offset = daylightOffsetTo;
	}
	else {
		offset = standardOffsetTo;
	}

	//gWVTIMEZONE  test for LG //gWXXX
	if (!offset)  return index;



	var negative = false;
	if (offset.charAt(0) == "-") {
		negative = true;
	}
	if (offset.charAt(0) == "-" || offset.charAt(0) == "+") {
		offset = offset.substring(1);
	}

	var hours = offset.substring(0, 2);
	var minutes = offset.substring(2, 4);
	var minutesOffset = parseInt(hours, 10) * 60;
	minutesOffset = minutesOffset + parseInt(minutes, 10);

	if (negative) {
		minutesOffset = minutesOffset * -1;
	}


	timezoneId = reminderfox.util.trim(timezoneId.toUpperCase());

/** Don't store the VTIMEZONE info, as it was getting duplicated and causing ICS file to balloon (03/21/2014)
 * It's not needed as we convert timezone to UTC date.
	if(!reminderfox.core.reminderFox_timezones[timezoneId]) {

		if (!reminderfox.core.reminderFoxExtraInfoPrefix) {
			reminderfox.core.reminderFoxExtraInfoPrefix = cTZstring + "END:VTIMEZONE";
		} else {
			reminderfox.core.reminderFoxExtraInfoPrefix = reminderfox.core.reminderFoxExtraInfoPrefix + "\\n" + cTZstring + "END:VTIMEZONE";
		}
	}
*/

	reminderfox.core.reminderFox_timezones[timezoneId] = minutesOffset;

	return index;
};



reminderfox.core.calculateRRule= function(standardRRule){
	var standardDate;

	var reminderEvent = new reminderfox.core.ReminderFoxEvent(null, null, null);

	var date = new Date();
	date.setHours(2);
	date.setMinutes(0);
	date.setSeconds(0);
	var byDay = reminderfox.core.getRecurrenceByDay(standardRRule, true);
	var byMonth = reminderfox.core.getRecurrenceByMonth(standardRRule);
	date.setMonth(byMonth - 1);

	var negativeIndex = byDay.indexOf("-");
	if (negativeIndex == -1) {
		var weekNum = byDay.substring(0, 1);
		var dayNum = reminderfox.core.getFirstDayValueFromByDay(byDay.substring(1));
		standardDate = reminderfox.date.getDateForSpecifiedWeekNumber(date, dayNum, weekNum);
	}
	else {
		// subtract
		var byDay = reminderfox.core.getRecurrenceByDay(standardRRule, true);
		var byMonth = reminderfox.core.getRecurrenceByMonth(standardRRule);
		var weekNum = byDay.substring(1, 2);
		var dayNum = reminderfox.core.getFirstDayValueFromByDay(byDay.substring(2));

		var currentYear = date.getFullYear();
		if (reminderfox.date.isLeapYear(currentYear)) {
			var dayArray = reminderfox.consts.lDOMonth;
		}
		else {
			var dayArray = reminderfox.consts.DOMonth;
		}
		var numOfDaysInMonth = dayArray[byMonth - 1];

		var totalDaysOfWeekInMonth = 5;
		var reminderWeekDateThisMonth = reminderfox.date.getDateForSpecifiedWeekNumber(date, dayNum, 5);
		if (reminderWeekDateThisMonth > numOfDaysInMonth) {
			totalDaysOfWeekInMonth = 4;
		}
		totalDaysOfWeekInMonth = totalDaysOfWeekInMonth - weekNum + 1;

		standardDate = reminderfox.date.getDateForSpecifiedWeekNumber(date, dayNum, totalDaysOfWeekInMonth);


	}
	date.setDate(standardDate);
	return date;
};


/**
 * Read in an event
 * @param {boolean} cleanUID  =true will generate a new UID to overwrite the one with the imported event
 *          Needs to be sure we get a UID which can be handled with CalDAV (see http://xing.com with event data) 
 * @since 2013-07-03 cleanUID disabled, will always clean the UID!

 *  * @since 2013-05-08  Modification to readin multiple ALARM components; after processing the complete 
 * event the first DISPLAY is processed for RmFx alarm feature
 */
reminderfox.core.readInReminderEvent= function(reminderEvent, index, readIn, remindersArray){
	var colonIndex;

	reminderEvent.alarmArray = [];
	reminderEvent.alarmIndex = -1;

	while (index < remindersArray.length && readIn != "END:VEVENT") {
		if (readIn.indexOf("SUMMARY") === 0) {
			colonIndex = readIn.indexOf(":");
			while (colonIndex == -1) {
				index++;
				readIn = remindersArray[index];
				colonIndex = readIn.indexOf(":");
			}
			reminderEvent.summary = readIn.substring(colonIndex + 1);
			reminderEvent.summary = reminderfox.util.unEscapeCommas(reminderEvent.summary);
		}

		else
			if (readIn.indexOf("DESCRIPTION") === 0) {
				// there can be multiple notes DESCRIPTION fields; if we have already set the notes field,
				// then we'll skip it if we encounter another one
				var skipNotes = reminderEvent.notes;

				colonIndex = readIn.indexOf(":");
				while (colonIndex == -1) {
					index++;
					readIn = remindersArray[index];
					colonIndex = readIn.indexOf(":");
				}
				if (!skipNotes) {
					reminderEvent.notes = readIn.substring(colonIndex + 1);
				}

				// replace new line characters with actual newline
				reminderEvent.notes = reminderEvent.notes.replace(new RegExp(/\\n/g), "\n");
				reminderEvent.notes = reminderfox.util.unEscapeCommas(reminderEvent.notes);

				if (reminderEvent.notes.length === 0) {
					reminderEvent.notes = null; // dont' store empty notes
				}
			}

			else
				if (readIn.indexOf("UID") === 0) {
					// read UID from import
					colonIndex = readIn.indexOf(":");
					while (colonIndex == -1) {
						index++;
						readIn = remindersArray[index];
						colonIndex = readIn.indexOf(":");
					}
					var uid = readIn.substring(colonIndex + 1);

					// generate a 'clean' UID  for UID's with a URL look as used with 
					// XING:  UID:https://www.xing.com/events/projektmanagement-live-849703
					// Would fail with GCalendar/CalDAV (upload is OK, but download fails!)
					// -->> Converts slash and : to underscore to get 
					// UID:https___www.xing.com_events_projektmanagement-live-849703
					uid = uid.replace(/\/|:/g, "_");
					reminderEvent.id = uid;
				}

				else
					if (readIn.indexOf("LAST-MODIFIED") === 0) {
						colonIndex = readIn.indexOf(":");
						while (colonIndex == -1) {
							index++;
							readIn = remindersArray[index];
							colonIndex = readIn.indexOf(":");
						}
						reminderEvent.lastModified = readIn.substring(colonIndex + 1);
					}

					else
						if (readIn.indexOf("PRIORITY") === 0) {
							colonIndex = readIn.indexOf(":");
							while (colonIndex == -1) {
								index++;
								readIn = remindersArray[index];
								colonIndex = readIn.indexOf(":");
							}
							reminderEvent.priority = readIn.substring(colonIndex + 1);
						}

					else
						if (readIn.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "PRIORITY") === 0) {
							colonIndex = readIn.indexOf(":");
							while (colonIndex == -1) {
								index++;
								readIn = remindersArray[index];
								colonIndex = readIn.indexOf(":");
							}
							reminderEvent.xpriority = readIn.substring(colonIndex + 1);
						}



						else
							if (readIn.indexOf("CATEGORIES") === 0) {
								colonIndex = readIn.indexOf(":");
								while (colonIndex == -1) {
									index++;
									readIn = remindersArray[index];
									colonIndex = readIn.indexOf(":");
								}
								var cCategory = readIn.substring(colonIndex + 1);
								if (!reminderEvent.categories) {
									reminderEvent.categories = cCategory;
								}
								else {
									reminderEvent.categories += "," + cCategory;
								}
						}
//CATEGORIES
						else
							if (readIn.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "CATEGORIES") === 0) {
								colonIndex = readIn.indexOf(":");
								while (colonIndex == -1) {
									index++;
									readIn = remindersArray[index];
									colonIndex = readIn.indexOf(":");
								}
								var cCategory = readIn.substring(colonIndex + 1);
								if (!reminderEvent.xcategories) {
									reminderEvent.xcategories = cCategory;
								}
								else {
									reminderEvent.xcategories += "," + cCategory;
								}
							}


							else
								if (readIn.indexOf("LOCATION") === 0) {
									colonIndex = readIn.indexOf(":");
									while (colonIndex == -1) {
										index++;
										readIn = remindersArray[index];
										colonIndex = readIn.indexOf(":");
									}
									reminderEvent.location = readIn.substring(colonIndex + 1);
									reminderEvent.location = reminderfox.util.unEscapeCommas(reminderEvent.location);
								}

								else
									if (readIn.indexOf("URL") === 0) {
										colonIndex = readIn.indexOf(":");
										while (colonIndex == -1) {
											index++;
											readIn = remindersArray[index];
											colonIndex = readIn.indexOf(":");
										}
										reminderEvent.url = readIn.substring(colonIndex + 1);
									}

									else
										if (readIn.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "REMIND-UNTIL-COMPLETED") === 0) {
											colonIndex = readIn.indexOf(":");
											while (colonIndex == -1) {
												index++;
												readIn = remindersArray[index];
												colonIndex = readIn.indexOf(":");
											}
											reminderEvent.remindUntilCompleted = readIn.substring(colonIndex + 1);
										}

										else
//VALARM
											if (readIn.indexOf("BEGIN:VALARM") === 0) {
												var colonIndex =0;
												reminderEvent.alarmIndex++;
												reminderEvent.alarmArray[reminderEvent.alarmIndex] = [];
												index++;
												readIn = remindersArray[index];

												while (index < remindersArray.length && readIn != "END:VALARM") {
													// all items just stored to alarmArray
													colonIndex = readIn.indexOf(":");
													while (colonIndex == -1) {
														index++;
														readIn = remindersArray[index];
														colonIndex = readIn.indexOf(":");
													}
													var item = readIn.substring(0, colonIndex);
													reminderEvent.alarmArray[reminderEvent.alarmIndex][item] = readIn.substring(colonIndex + 1);

													index++;
													readIn = remindersArray[index];
												}
											}

											else
												if (readIn.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "MESSAGEID") === 0) {
													colonIndex = readIn.indexOf(":");
													while (colonIndex == -1) {
														index++;
														readIn = remindersArray[index];
														colonIndex = readIn.indexOf(":");
													}
													reminderEvent.messageID = readIn.substring(colonIndex + 1);
												}

												else
													if (readIn.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "CALDAVID") === 0) {
														colonIndex = readIn.indexOf(":");
														while (colonIndex == -1) {
															index++;
															readIn = remindersArray[index];
															colonIndex = readIn.indexOf(":");
														}
														reminderEvent.calDAVid = readIn.substring(colonIndex + 1);
													}

												else
													if (readIn.indexOf("DTSTART") === 0 || readIn.indexOf("DTEND") === 0) {
														var startDate = (readIn.indexOf("DTSTART") === 0);
														colonIndex = readIn.indexOf(":");
														while (colonIndex == -1) {
															index++;
															readIn = remindersArray[index];
															colonIndex = readIn.indexOf(":");
														}

														var eventDate = readIn.substring(colonIndex + 1);
														var timeIndex = readIn.indexOf("T", colonIndex);
														var month = eventDate.substring(4, 6);
														if (month.indexOf("0") === 0) {
															month = month.substring(1);
														}
														var monthInt = parseInt(month, 10) - 1;
														if (timeIndex == -1) {
															// all day event
															if (startDate) {
																reminderEvent.date = new Date(eventDate.substring(0, 4), monthInt, eventDate.substring(6, 8));
															}
															else {
																reminderEvent.endDate = new Date(eventDate.substring(0, 4), monthInt, eventDate.substring(6, 8));
															}
														}

														else {
															// event with specific hourly time
															if (startDate) {
																reminderEvent.date = new Date(eventDate.substring(0, 4), monthInt, eventDate.substring(6, 8));
																reminderEvent.date.setHours(eventDate.substring(9, 11), eventDate.substring(11, 13));
																reminderfox.date.adjustTimeZones(eventDate, readIn, reminderEvent.date);

																reminderEvent.allDayEvent = false;
															}

															else {
																reminderEvent.endDate = new Date(eventDate.substring(0, 4), monthInt, eventDate.substring(6, 8));
																reminderEvent.endDate.setHours(eventDate.substring(9, 11), eventDate.substring(11, 13));
																reminderfox.date.adjustTimeZones(eventDate, readIn, reminderEvent.endDate);
															}
														}

														if (!startDate) {
															// set the end date diff
															if (reminderEvent.date && reminderEvent.endDate) {
																reminderEvent.durationTime = reminderEvent.endDate.getTime() - reminderEvent.date.getTime();
															}
														}
													}	// DTSTART DTEND

													else
														if (readIn.indexOf("DURATION") === 0) {
															colonIndex = readIn.indexOf(":");
															while (colonIndex == -1) {
																index++;
																readIn = remindersArray[index];
																colonIndex = readIn.indexOf(":");
															}
															var duration = readIn.substring(colonIndex + 1);
															if (reminderEvent.date) {
																var durationMins = reminderfox.core.getDurationAsMinutes(duration);
																reminderEvent.durationTime = durationMins * 60 * 1000; // set the end date diff
																reminderEvent.endDate = new Date(reminderEvent.date.getTime() + reminderEvent.durationTime);
															}
														}

														else
															if (readIn.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "COMPLETED") === 0) {
																colonIndex = readIn.indexOf(":");
																while (colonIndex == -1) {
																	index++;
																	readIn = remindersArray[index];
																	colonIndex = readIn.indexOf(":");
																}
																var eventDate = readIn.substring(colonIndex + 1);
																var month = eventDate.substring(4, 6);
																if (month.indexOf("0") === 0) {
																	month = month.substring(1);
																}
																var monthInt = parseInt(month, 10) - 1;
																reminderEvent.completedDate = new Date(eventDate.substring(0, 4), monthInt, eventDate.substring(6, 8));
															}

															else
																if (readIn.indexOf("RRULE") === 0) {
																	index = reminderfox.core.readInRecurrence(readIn, index, remindersArray, reminderEvent);
																}

																else
																	if (readIn != "BEGIN:VEVENT") {
																		// this is a line that we do not recognize it.  Just store it
																		if (!reminderEvent.extraInfo) {
																			reminderEvent.extraInfo = readIn;
																		}

																		else {
																			// ignore repeat elements
																			//gW  but import multiple ATTENDEE elements !!
																			//   note: the element string may be equal up to the first LF

																			if ((reminderEvent.extraInfo.indexOf(readIn) == -1) || (readIn.indexOf("ATTENDEE") > -1)) {
																				// take care for LF in COMMENTs
																				if (readIn.indexOf("COMMENT") === 0) {
																					readIn = readIn.replace(new RegExp(/\\n/g), "\n");
																				}
																				reminderEvent.extraInfo = reminderEvent.extraInfo + "\\n" + readIn;
																			}
																		}
																	}
		index++;
		readIn = remindersArray[index];
	}

	/*
	 * get ALARM for RmFx, only the first DISPLAY will be taken for 'alarm', alarmIndex set also
	 * other ALARMs of the event to 'extraString'
	 */
	var aLength = reminderEvent.alarmArray.length;
	if (aLength !== 0) {
		for (var i = 0; i < aLength; i++) {
			// check for first TRIGGER:DISPLAY
			if ((reminderEvent.alarmArray[i].ACTION == 'DISPLAY') && (!reminderEvent.alarm)){
				reminderEvent.alarmIndex = i;

				for (var item in reminderEvent.alarmArray[i]) {
					var value = reminderEvent.alarmArray[i][item];

					if (item.indexOf("TRIGGER") === 0) {
					//---- TRIGGER/alarm is relative (normally used by RmFx) or absolute (like with GCal)
					// trigabs::   TRIGGER;VALUE=DATE-TIME:20130505T143000Z
					// trigrel::   TRIGGER:-PT5M		(may contain TRIGGER;RELATED=END:PT5M .. ignored that for the moment )
					reminderEvent.alarm = value;
					}
					if (reminderfox.consts.REMINDER_FOX_EXTENDED + "LASTACK" == item) {
						reminderEvent.alarmLastAcknowledge = value;
					}
					if (reminderfox.consts.REMINDER_FOX_EXTENDED + "SNOOZE-TIME" == item) {
						reminderEvent.snoozeTime = value;
					}
				}
			}	else { // save these 'other' ALARM entries to extraString 
				reminderEvent.extraInfo += "\\nBEGIN:VALARM";
				for (var item in reminderEvent.alarmArray[i]) {
					var value = reminderEvent.alarmArray[i][item];
					reminderEvent.extraInfo += "\\n" + item + ':' + value;
				}
				reminderEvent.extraInfo += "\\nEND:VALARM"
			}
		}
	}

	// GCal doesn't return CATEGORIES and PRIORITY, so read it from reminderfox.consts.REMINDER_FOX_EXTENDED strings
	if ((reminderfox.core.currentProdId) 
		&& (reminderfox.core.currentProdId.indexOf("PRODID:-//Google Inc//Google Calendar")) === 0) {

		reminderEvent.priority = null;
		if (reminderEvent.xpriority) {
			reminderEvent.priority = reminderEvent.xpriority;
		}

		// check for  CATEGORIES:http://schemas.google.com/g/2005#event
		if ((reminderEvent.categories) && (reminderEvent.categories.indexOf("http://schemas.google.com") != -1)) {
			reminderEvent.categories = null;
			if (reminderEvent.xcategories) reminderEvent.categories = reminderEvent.xcategories;
		}
	}

	return index;
};


reminderfox.core.writeOutRecurrence= function(reminder, currentDate, separator, newline){
	var endRepeatUntil = "";
	var outputStr = "";
	
	// if a ToDo was saved with no date but had a stale recurrence, clean it up
	// by removing the recurrence
	if ( reminder.date == null && reminder.recurrence.type  != null ) { 
		reminder.recurrence.type  = null;
	}
	
	if (reminder.recurrence.endDate) {
		//currentDate.setMinutes( currentDate.getMinutes() + tzOffset );	// set this offset for UTC
		var year = reminder.recurrence.endDate.getFullYear();
		var endRepeatUntilmonth = reminder.recurrence.endDate.getMonth() + 1;
		var day = reminder.recurrence.endDate.getDate();
		if (endRepeatUntilmonth < 10)
			endRepeatUntilmonth = "0" + endRepeatUntilmonth;
		if (day < 10)
			day = "0" + day;

		endRepeatUntil += ";UNTIL=" + "" + year + endRepeatUntilmonth + day;
	}

	if (reminder.recurrence.count) {
		var rCount = reminder.recurrence.count; 
//reminderfox.util.Logger('rcount', '  out ICS data  .. repeatCountNum: ' + rCount)
		endRepeatUntil += ";COUNT=" + rCount;
	}

	var interval = reminder.recurrence.interval;
	if (!interval || interval <= 1) {
		interval = 1;
	}
	if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_YEARLY) {
		var month = reminder.date.getMonth() + 1;
		if (month < 10) {
			month = "0" + month;
		}
		outputStr += "RRULE" + separator +
		"FREQ=YEARLY;INTERVAL=" +
		interval +
		";BYMONTH=" +
		month +
		endRepeatUntil +
		newline;
	}
	else
		if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_YEARLY_DAY) {
			var weekNumber = reminderfox.date.getWeekNumber(reminder.date);
			var month = currentDate.getMonth() + 1;
			if (month < 10) {
				month = "0" + month;
			}
			outputStr += "RRULE" + separator +
			"FREQ=YEARLY;INTERVAL=" +
			interval +
			";BYMONTH=" +
			month +
			";BYDAY=" +
			weekNumber +
			reminderfox.consts.weekday[reminder.date.getDay()] +
			endRepeatUntil +
			newline;
		}
		else
			if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_MONTHLY_DATE) {
				outputStr += "RRULE" + separator +
				"FREQ=MONTHLY;INTERVAL=" +
				interval +
				endRepeatUntil +
				newline;
			}
			else
				if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_MONTHLY_DAY) {
					var weekNumber = reminderfox.date.getWeekNumber(reminder.date);
					outputStr += "RRULE" + separator +
					"FREQ=MONTHLY;INTERVAL=" +
					interval +
					";BYDAY=" +
					weekNumber +
					reminderfox.consts.weekday[reminder.date.getDay()] +
					endRepeatUntil +
					newline;
				}
				else
					if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_WEEKLY) {
						if (!reminder.recurrence.byDay || reminder.recurrence.byDay.length === 0) {
							outputStr += "RRULE" + separator +
							"FREQ=WEEKLY;INTERVAL=" +
							interval +
							";BYDAY=" +
							reminderfox.consts.weekday[reminder.date.getDay()] +
							endRepeatUntil +
							newline;
						}
						else {
							outputStr += "RRULE" + separator +
							"FREQ=WEEKLY;INTERVAL=" +
							interval +
							";BYDAY=" +
							reminder.recurrence.byDay +
							endRepeatUntil +
							newline;
						}
					}
					else
						if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_DAILY) {
							if (interval > 1) {
								outputStr += "RRULE" + separator +
								"FREQ=DAILY;INTERVAL=" +
								interval +
								endRepeatUntil +
								newline;
							}
							else {
								outputStr += "RRULE" + separator +
								"FREQ=DAILY" +
								endRepeatUntil +
								newline;
							}

						}
						else {
						// no recurrence string for reminderfox.consts.RECURRENCE_ONETIME
						}
	return outputStr;
};

reminderfox.core.getRecurrenceInterval= function(rrule){
	var interval = null;
	var intervalIndex = rrule.indexOf("INTERVAL=");
	try {
		if (intervalIndex != -1) {
			var semicolonIndex = rrule.indexOf(";", intervalIndex);
			if (semicolonIndex == -1) {
				interval = parseInt(rrule.substring(intervalIndex + "INTERVAL=".length, rrule.length), 10);
			}
			else {
				interval = parseInt(rrule.substring(intervalIndex + "INTERVAL=".length, semicolonIndex), 10);
			}
		}
	}
	catch (e) {
	}
	return interval;
};

reminderfox.core.getRecurrenceByDay= function(rrule, ignoreMultiples){
	var byday = "";
	var bydayIndex = rrule.indexOf("BYDAY=");
	try {
		if (bydayIndex != -1) {
			var semicolonIndex = rrule.indexOf(";", bydayIndex);
			if (semicolonIndex == -1) {
				byday = rrule.substring(bydayIndex + "BYDAY=".length, rrule.length);
			}
			else {
				byday = rrule.substring(bydayIndex + "BYDAY=".length, semicolonIndex);
			}
			if (!ignoreMultiples && byday.indexOf(",") == -1) { // only one byday; don't store it
				byday = null;
			}
		}
	}
	catch (e) {
	}

	return byday;
};

reminderfox.core.getRecurrenceByMonth= function(rrule){
	var byday = "";
	var bydayIndex = rrule.indexOf("BYMONTH=");
	try {
		if (bydayIndex != -1) {
			var semicolonIndex = rrule.indexOf(";", bydayIndex);
			if (semicolonIndex == -1) {
				byday = rrule.substring(bydayIndex + "BYMONTH=".length, rrule.length);
			}
			else {
				byday = rrule.substring(bydayIndex + "BYMONTH=".length, semicolonIndex);
			}
		}
	}
	catch (e) {
	}

	return byday;
};

reminderfox.core.readInRecurrence= function(readIn, index, remindersArray, reminderEvent){
	var colonIndex = readIn.indexOf(":");
	while (colonIndex == -1) {
		index++;
		readIn = remindersArray[index];
		colonIndex = readIn.indexOf(":");
	}
	var rrule = readIn.substring(colonIndex + 1);
	if (rrule.indexOf("FREQ=YEARLY") != -1) {
		reminderEvent.recurrence.interval = reminderfox.core.getRecurrenceInterval(rrule);
		var byDayIndex = rrule.indexOf("BYDAY=");
		if (byDayIndex != -1) {
			// yearly on day
			reminderEvent.recurrence.type = reminderfox.consts.RECURRENCE_YEARLY_DAY;
		}
		else {
			reminderEvent.recurrence.type = reminderfox.consts.RECURRENCE_YEARLY;
		}
	}
	else
		if (rrule.indexOf("FREQ=MONTHLY") != -1) {
			var byDayIndex = rrule.indexOf("BYDAY=");
			if (byDayIndex != -1) {
				if (rrule.indexOf("INTERVAL=12") != -1) {
					// yearly on day
					reminderEvent.recurrence.type = reminderfox.consts.RECURRENCE_YEARLY_DAY;
				}
				else {
					// monthly on day
					reminderEvent.recurrence.type = reminderfox.consts.RECURRENCE_MONTHLY_DAY;
					reminderEvent.recurrence.interval = reminderfox.core.getRecurrenceInterval(rrule);
				}
			}
			else {
				// monthly on date
				reminderEvent.recurrence.type = reminderfox.consts.RECURRENCE_MONTHLY_DATE;
				reminderEvent.recurrence.interval = reminderfox.core.getRecurrenceInterval(rrule);
			}
		}
		else
			if (rrule.indexOf("FREQ=WEEKLY") != -1) {
				reminderEvent.recurrence.byDay = reminderfox.core.getRecurrenceByDay(rrule);
				reminderEvent.recurrence.type = reminderfox.consts.RECURRENCE_WEEKLY;
				reminderEvent.recurrence.interval = reminderfox.core.getRecurrenceInterval(rrule);
			}
			else
				if (rrule.indexOf("FREQ=DAILY") != -1) {
					reminderEvent.recurrence.type = reminderfox.consts.RECURRENCE_DAILY;
					reminderEvent.recurrence.interval = reminderfox.core.getRecurrenceInterval(rrule);
				}

	// ;UNTIL=20060504T035959;INTERVAL=1
	var repeatUntil = rrule.indexOf("UNTIL=");
	if (repeatUntil != -1) {
		var endRepeatUntil = rrule.indexOf(";", repeatUntil);
		if (endRepeatUntil == -1) {
			endRepeatUntil = rrule.length;
		}

		var repeatUntilStr = rrule.substring(repeatUntil + "UNTIL=".length, endRepeatUntil);
		var timeIndex = repeatUntilStr.indexOf("T", colonIndex);
		var month = repeatUntilStr.substring(4, 6);
		if (month.indexOf("0") === 0) {
			month = month.substring(1);
		}
		var monthInt = parseInt(month, 10) - 1;
		if (timeIndex == -1) {
			// all day event
			reminderEvent.recurrence.endDate = new Date(repeatUntilStr.substring(0, 4), monthInt, repeatUntilStr.substring(6, 8));
		}
		else {
			// event with specific hourly time
			reminderEvent.recurrence.endDate = new Date(repeatUntilStr.substring(0, 4), monthInt, repeatUntilStr.substring(6, 8));
			reminderEvent.recurrence.endDate.setHours(repeatUntilStr.substring(9, 11), repeatUntilStr.substring(11, 13));

			reminderfox.date.adjustTimeZones(repeatUntilStr, rrule, reminderEvent.recurrence.endDate);
		}
	}

	// RRULE:FREQ=DAILY;COUNT=5				//COUNT
	var repeatCount = rrule.indexOf("COUNT=");
	if (repeatCount != -1) {
		var repeatCountUntil = rrule.indexOf(";", repeatCount);
		if (repeatCountUntil == -1) {
			repeatCountUntil = rrule.length;
		}
		var repeatCountNum = +rrule.substring(repeatCount + "COUNT=".length, repeatCountUntil);
		reminderEvent.recurrence.count = repeatCountNum;
//reminderfox.util.Logger('rcount', 'repeatCountNum: ' + repeatCountNum)
	}

	return index;
};



reminderfox.core.readInReminderTodo= function(reminderTodo, index, readIn, remindersArray, reminderTodosArr){
var colonIndex;

	reminderTodo.alarmArray = [];
	reminderTodo.alarmIndex = -1;

	var listID;
	while (index < remindersArray.length && readIn != "END:VTODO") {
		if (readIn.indexOf("SUMMARY") === 0) {
			colonIndex = readIn.indexOf(":");
			while (colonIndex == -1) {
				index++;
				readIn = remindersArray[index];
				colonIndex = readIn.indexOf(":");
			}
			reminderTodo.summary = readIn.substring(colonIndex + 1);
			reminderTodo.summary = reminderfox.util.unEscapeCommas(reminderTodo.summary);
		}
		else
			if (readIn.indexOf("UID") === 0) {
				colonIndex = readIn.indexOf(":");
				while (colonIndex == -1) {
					index++;
					readIn = remindersArray[index];
					colonIndex = readIn.indexOf(":");
				}
				reminderTodo.id = readIn.substring(colonIndex + 1);
			}
			else
				if (readIn.indexOf("DESCRIPTION") === 0) {
					colonIndex = readIn.indexOf(":");
					while (colonIndex == -1) {
						index++;
						readIn = remindersArray[index];
						colonIndex = readIn.indexOf(":");
					}
					reminderTodo.notes = readIn.substring(colonIndex + 1);

					// replace new line characters with actual newline
					reminderTodo.notes = reminderTodo.notes.replace(new RegExp(/\\n/g), "\n");
					reminderTodo.notes = reminderfox.util.unEscapeCommas(reminderTodo.notes);

					if (reminderTodo.notes.length === 0) {
						reminderTodo.notes = null; // dont' store empty notes
					}
				}

				else
					if (readIn.indexOf("CATEGORIES") === 0) {
						colonIndex = readIn.indexOf(":");
						while (colonIndex == -1) {
							index++;
							readIn = remindersArray[index];
							colonIndex = readIn.indexOf(":");
						}
						reminderTodo.categories = readIn.substring(colonIndex + 1);
					}

				else
					if (readIn.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "CATEGORIES") === 0) {
						colonIndex = readIn.indexOf(":");
						while (colonIndex == -1) {
							index++;
							readIn = remindersArray[index];
							colonIndex = readIn.indexOf(":");
						}
						var cCategory = readIn.substring(colonIndex + 1);
						if (!reminderTodo.xcategories) {
							reminderTodo.xcategories = cCategory;
						}
						else {
							reminderTodo.xcategories += "," + cCategory;
						}
					}

					else
						if (readIn.indexOf("LOCATION") === 0) {
							colonIndex = readIn.indexOf(":");
							while (colonIndex == -1) {
								index++;
								readIn = remindersArray[index];
								colonIndex = readIn.indexOf(":");
							}
							reminderTodo.location = readIn.substring(colonIndex + 1);
							reminderTodo.location = reminderfox.util.unEscapeCommas(reminderTodo.location);
						}
						else

							if (readIn.indexOf("URL") === 0) {
								colonIndex = readIn.indexOf(":");
								while (colonIndex == -1) {
									index++;
									readIn = remindersArray[index];
									colonIndex = readIn.indexOf(":");
								}
								reminderTodo.url = readIn.substring(colonIndex + 1);
							}
			//gWEditing
							else
								if (readIn.indexOf("LAST-MODIFIED") === 0) {
									colonIndex = readIn.indexOf(":");
									while (colonIndex == -1) {
										index++;
										readIn = remindersArray[index];
										colonIndex = readIn.indexOf(":");
									}
									reminderTodo.lastModified = readIn.substring(colonIndex + 1);
								}

							else
								if (readIn.indexOf("PRIORITY") === 0) {
									colonIndex = readIn.indexOf(":");
									while (colonIndex == -1) {
										index++;
										readIn = remindersArray[index];
										colonIndex = readIn.indexOf(":");
									}
									reminderTodo.priority = readIn.substring(colonIndex + 1);
								}

							else
								if (readIn.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "PRIORITY") === 0) {
									colonIndex = readIn.indexOf(":");
									while (colonIndex == -1) {
										index++;
										readIn = remindersArray[index];
										colonIndex = readIn.indexOf(":");
									}
									reminderTodo.xpriority = readIn.substring(colonIndex + 1);
								}

								else
									if (readIn.indexOf("PERCENT-COMPLETE") === 0) {
										colonIndex = readIn.indexOf(":");
										while (colonIndex == -1) {
											index++;
											readIn = remindersArray[index];
											colonIndex = readIn.indexOf(":");
										}
										var completePercent = readIn.substring(colonIndex + 1);
										if (completePercent == "100") {
											if (!reminderTodo.completedDate) {
												reminderTodo.completedDate = new Date();
											}
										}
									}
									else
										if (readIn.indexOf("RRULE") === 0) {
											index = reminderfox.core.readInRecurrence(readIn, index, remindersArray, reminderTodo);
										}
										else
											if (readIn.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "SHOW-IN-TOOLTIP") === 0) {
												colonIndex = readIn.indexOf(":");
												while (colonIndex == -1) {
													index++;
													readIn = remindersArray[index];
													colonIndex = readIn.indexOf(":");
												}
												reminderTodo.showInTooltip = readIn.substring(colonIndex + 1);
											}
											else
												if (readIn.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "MESSAGEID") === 0) {
													colonIndex = readIn.indexOf(":");
													while (colonIndex == -1) {
														index++;
														readIn = remindersArray[index];
														colonIndex = readIn.indexOf(":");
													}
													reminderTodo.messageID = readIn.substring(colonIndex + 1);
												}
												else
													if (readIn.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "LISTID") === 0) {
														colonIndex = readIn.indexOf(":");
														while (colonIndex == -1) {
															index++;
															readIn = remindersArray[index];
															colonIndex = readIn.indexOf(":");
														}
														listID = readIn.substring(colonIndex + 1);
													}
													else
														if (readIn.indexOf("DTSTART") === 0) {
															colonIndex = readIn.indexOf(":");
															while (colonIndex == -1) {
																index++;
																readIn = remindersArray[index];
																colonIndex = readIn.indexOf(":");
															}
															var eventDate = readIn.substring(colonIndex + 1);
															var timeIndex = readIn.indexOf("T", colonIndex);
															var month = eventDate.substring(4, 6);
															if (month.indexOf("0") === 0) {
																month = month.substring(1);
															}
															var monthInt = parseInt(month, 10) - 1;
															if (timeIndex == -1) {
																// all day event
																reminderTodo.date = new Date(eventDate.substring(0, 4), monthInt, eventDate.substring(6, 8));
															}
															else {
																// event with specific hourly time
																reminderTodo.date = new Date(eventDate.substring(0, 4), monthInt, eventDate.substring(6, 8));
																reminderTodo.date.setHours(eventDate.substring(9, 11), eventDate.substring(11, 13));
																reminderfox.date.adjustTimeZones(eventDate, readIn, reminderTodo.date);

																reminderTodo.allDayEvent = false;
															}
														}
														else
															if (readIn.indexOf("DURATION") === 0) {
																colonIndex = readIn.indexOf(":");
																while (colonIndex == -1) {
																	index++;
																	readIn = remindersArray[index];
																	colonIndex = readIn.indexOf(":");
																}
																var duration = readIn.substring(colonIndex + 1);
																if (reminderTodo.date) {
																	var durationMins = reminderfox.core.getDurationAsMinutes(duration);
																	reminderTodo.durationTime = durationMins * 60 * 1000; // set the end date diff
																	reminderTodo.endDate = new Date(reminderTodo.date.getTime() + reminderTodo.durationTime);
																}
															}


												else
													if (readIn.indexOf(reminderfox.consts.REMINDER_FOX_EXTENDED + "CALDAVID") === 0) {
														colonIndex = readIn.indexOf(":");
														while (colonIndex == -1) {
															index++;
															readIn = remindersArray[index];
															colonIndex = readIn.indexOf(":");
														}
														reminderTodo.calDAVid = readIn.substring(colonIndex + 1);
													}

															else
//VALARM
																if (readIn.indexOf("BEGIN:VALARM") === 0) {
																	colonIndex =0;
																	reminderTodo.alarmIndex++;
																	reminderTodo.alarmArray[reminderTodo.alarmIndex] = [];
																	index++;
																	readIn = remindersArray[index];
															
																	while (index < remindersArray.length && readIn != "END:VALARM") {
																		// all items just stored to alarmArray
																		colonIndex = readIn.indexOf(":");
																		while (colonIndex == -1) {
																			index++;
																			readIn = remindersArray[index];
																			colonIndex = readIn.indexOf(":");
																		}
																		var item = readIn.substring(0, colonIndex);
																		reminderTodo.alarmArray[reminderTodo.alarmIndex][item] = readIn.substring(colonIndex + 1);
															
																		index++;
																		readIn = remindersArray[index];
																	}

																}
																else
																	if (readIn.indexOf("COMPLETED") === 0) {
																		colonIndex = readIn.indexOf(":");
																		while (colonIndex == -1) {
																			index++;
																			readIn = remindersArray[index];
																			colonIndex = readIn.indexOf(":");
																		}
																		var eventDate = readIn.substring(colonIndex + 1);
																		var month = eventDate.substring(4, 6);
																		if (month.indexOf("0") === 0) {
																			month = month.substring(1);
																		}
																		var monthInt = parseInt(month, 10) - 1;
																		reminderTodo.completedDate = new Date(eventDate.substring(0, 4), monthInt, eventDate.substring(6, 8));

																	}
																	else
																		if (readIn != "BEGIN:VTODO") {
																			// this is a line that we do not recognize it.  Just store it
																			if (!reminderTodo.extraInfo) {
																				reminderTodo.extraInfo = readIn;
																			}
																			else {
																				if (reminderTodo.extraInfo.indexOf(readIn) == -1) { // ignore repeat elements
																					reminderTodo.extraInfo = reminderTodo.extraInfo + "\\n" + readIn;
																				}
																			}
																		}

		index++;
		readIn = remindersArray[index];
	}

	/*
	 * get ALARM for RmFx, only the first DISPLAY will be taken for 'alarm', alarmIndex set also
	 * other ALARMs of the event to 'extraString'
	 */
	var aLength = reminderTodo.alarmArray.length;
	if (aLength !== 0) {
		for (var i = 0; i < aLength; i++) {
			// check for first TRIGGER:DISPLAY
			if ((reminderTodo.alarmArray[i].ACTION == 'DISPLAY') && (!reminderTodo.alarm)){
				reminderTodo.alarmIndex = i;

				for (var item in reminderTodo.alarmArray[i]) {
					var value = reminderTodo.alarmArray[i][item];

					if (item.indexOf("TRIGGER") === 0) {
					//---- TRIGGER/alarm is relative (normally used by RmFx) or absolute (like with GCal)
					// trigabs::   TRIGGER;VALUE=DATE-TIME:20130505T143000Z
					// trigrel::   TRIGGER:-PT5M		(may contain TRIGGER;RELATED=END:PT5M .. ignored that for the moment )
						reminderTodo.alarm = value;
					}
					if (reminderfox.consts.REMINDER_FOX_EXTENDED + "LASTACK" == item) {
						reminderTodo.alarmLastAcknowledge = value;
					}
					if (reminderfox.consts.REMINDER_FOX_EXTENDED + "SNOOZE-TIME" == item) {
						reminderTodo.snoozeTime = value;
					}
				}
			}	else { // save these 'other' ALARM entries to extraString 
				reminderTodo.extraInfo += "\\nBEGIN:VALARM";
				for (var item in reminderTodo.alarmArray[i]) {
					var value = reminderTodo.alarmArray[i][item];
					reminderTodo.extraInfo += "\\n" + item + ':' + value;
				}
				reminderTodo.extraInfo += "\\nEND:VALARM";
			}
		}
	}

	// GCal doesn't return CATEGORIES and PRIORITY, so read it from reminderfox.consts.REMINDER_FOX_EXTENDED strings
	if (reminderfox.core.currentProdId.indexOf("PRODID:-//Google Inc//Google Calendar") === 0) {
		// to be save reset these parameters
		reminderTodo.categories = null;
		reminderTodo.priority = null;

		if (reminderTodo.xcategories) {
			reminderTodo.categories = reminderTodo.xcategories
		}
		if (reminderTodo.xpriority) {
			reminderTodo.priority = reminderTodo.xpriority
		}
	}

	// add todo to appropriate list
	if (!listID) {
		listID = reminderfox.consts.DEFAULT_TODOS_CATEGORY;
	}

	var todosArr = reminderTodosArr[listID];
	if (!todosArr) {
		todosArr = new Array();
		reminderTodosArr[listID] = todosArr;
	}
	todosArr[todosArr.length] = reminderTodo;

	if (listID != reminderfox.consts.DEFAULT_TODOS_CATEGORY) reminderTodo['X-listID'] = listID;
	reminderfox.core.numDaysModelAdd(reminderTodo, 'numDaysTodos');

	return index;
}



reminderfox.core.isCompletedForDate= function(reminder, reminderInstanceDate){
	if (!reminder.completedDate) {
		return false;
	}

	// if this is a one-time reminder that has been marked complete at any date, then it is completed
	if (reminder.recurrence.type == reminderfox.consts.RECURRENCE_ONETIME) {
		return true;
	}


	// return completed (true) if marked complete and the date is less than or equal to the reminder's date
	if (reminderfox.core.compareDates(reminderInstanceDate, reminder.completedDate) == 1) {
		return false;
	}
	else {
		return true;
	}
}

reminderfox.core.readInRemindersAndTodosICSFromFile= function(reminderEvents, reminderTodos, file, ignoreExtraInfo){
	var is = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
	try {
		is.init(file, 0x01, 00004, null);
	}
	catch (e) {
		reminderfox.core.logMessageLevel("Could not read reminder file: " + e.name + " -- " + e.message, reminderfox.consts.LOG_LEVEL_INFO);
		return;
	}

	reminderfox.core.readInRemindersAndTodosICSFromStream(reminderEvents, reminderTodos, is, ignoreExtraInfo);

	//gWCalDAV
	// With CalDAV enabled, each event/todo connected to a CalDAV account will 
	// be traced in  'reminderfox.calDAV.accounts' 
	// For details see array description
	reminderfox.calDAV.accountsReadIn();
}

/* Called also from download.js */
reminderfox.core.readInRemindersAndTodosICSFromStream= function(reminderEvents, reminderTodosArr, is, ignoreExtraInfo){
	var converter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"].createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
	converter.charset = /* The character encoding you want, using UTF-8 here */ "UTF-8";

	// Now, read from the stream
	var scriptableStream = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(Components.interfaces.nsIScriptableInputStream);
	scriptableStream.init(is);
	var chunk = scriptableStream.read(scriptableStream.available());
	var input = null;
	try {
		input = converter.ConvertToUnicode(chunk);
	}
	catch (e) {
		// if the conversion fails (say importing from a previous version before the conversion code was in place)
		// then just set the input to the read-in value
		input = chunk;
	}

	reminderfox.core.readInRemindersAndTodosICSFromString(reminderEvents, reminderTodosArr, input, ignoreExtraInfo);
}

// save PRODID to check for CalDAV with GCal 
reminderfox.core.currentProdId = null;


/**
 * Convert ICS data (string or array) to reminderfox array.
 * @param reminderEvents, reminderTodosArr {arrays} to hold the converted input
 * @param input {string or array}
 * @param ignoreExtraInfo {boolean} to coontrl coverting certain ICS attributes 
 */
reminderfox.core.readInRemindersAndTodosICSFromString= function(reminderEvents, reminderTodosArr, input, ignoreExtraInfo){
	var remindersArray;
	var reminderEventsIndex = 0;
	var i, j;

	if(typeof(input) == "string") {
		// if reading from a source that could be from a different OS (usually on import),
		// then check the newlines as they could differ from the current OS
		//if ( checkNewlines ) {
		// actually..  if sharing the stored reminders location between windows/linux or sharing remotely,
		// we need to check the newlines everytime
		remindersArray = reminderfox.util.splitOnAllNewlinesAndUnfoldLines(input);
	} else {
		remindersArray = input
	}

	var index = 0;
	var readIn = remindersArray[index];
	// bypass header
	//gWiCal	 modified to get the METHOD to  reminderfox.core.method
	reminderfox.core.method = "";

	while (index < remindersArray.length) {

		if (readIn == "BEGIN:VTIMEZONE") {
			// calculate list of timezones and current offset
			var reminderEvent2 = new reminderfox.core.ReminderFoxEvent(null, null, null);
			reminderEvent2.recurrence.type = reminderfox.consts.RECURRENCE_ONETIME;
			index = reminderfox.core.readInTimezone(reminderEvent, index, readIn, remindersArray);
		}

		else
			if (readIn.indexOf("METHOD:") === 0) {
				reminderfox.core.method = readIn.substring("METHOD:".length).toUpperCase();
			}
			else
				if (readIn == "BEGIN:VEVENT") {
					var reminderEvent = new reminderfox.core.ReminderFoxEvent(null, null, null);
					reminderEvent.recurrence.type = reminderfox.consts.RECURRENCE_ONETIME;
					index = reminderfox.core.readInReminderEvent(reminderEvent, index, readIn, remindersArray);

					reminderEvents[reminderEventsIndex] = reminderEvent;
					reminderfox.core.numDaysModelAdd(reminderEvent, 'numDaysEvents');

					reminderEventsIndex++;
				}

				else
					if (readIn == "BEGIN:VTODO") {
						var reminderTodo = new reminderfox.core.ReminderFoxTodo(null, null);

						index = reminderfox.core.readInReminderTodo(reminderTodo, index, readIn, remindersArray, reminderTodosArr);
					}

				else
					if (readIn.indexOf("PRODID:") === 0) {
						reminderfox.core.currentProdId = readIn;
					}

					else
						if (readIn.length > 0 &&
						readIn.indexOf("VCALENDAR") == -1 &&
						readIn.indexOf("VERSION") == -1 &&
		//				readIn.indexOf("PRODID") == -1 &&		// see reminderfox.core.currentProdId
						readIn.indexOf("METHOD") == -1 &&
						readIn.indexOf("REMINDERFOX") == -1) {
							// if doesn't equal any known reminderfox fields, store it
							if (ignoreExtraInfo) {
							// if we don't care about extra info, don't store it
							}
							else {
								if (!reminderfox.core.reminderFox_reminderFoxExtraInfo) {
									reminderfox.core.reminderFox_reminderFoxExtraInfo = readIn;
								}
								else {
									if (reminderfox.core.reminderFox_reminderFoxExtraInfo.indexOf(readIn) == -1) { // ignore repeat elements
										reminderfox.core.reminderFox_reminderFoxExtraInfo = reminderfox.core.reminderFox_reminderFoxExtraInfo + "\\n" + readIn;
									}
								}
							}
						}
		index++;
		readIn = remindersArray[index];
	}
	reminderfox.core.currentProdId = null;
}


/**
 * Add a reminder/todo to 'active/selected' numDaysArray
 * If reminder exists, it will be replaced using .numDaysModelDelete(reminder, namType)
 * @param reminder {object}
 * @param namType {string} indicate the array ('numDaysEvents/numDaysTodos')
 *
 *   XXX  the numDaysArray  doesn't work without 'event.date' attribute!!!
 */
reminderfox.core.numDaysModelAdd= function(reminder, namType){
	if (reminder.date) {

		if (!namType) {
			namType = reminderfox_isReminderTabSelected() ? 'numDaysEvents' : 'numDaysTodos';
		}

		if (!reminderfox.core[namType]) {
			reminderfox.core[namType] = [];
		}

		var numDate = reminderfox.date.convertDate(reminder.date);

		if (!reminderfox.core[namType][numDate]) {
			reminderfox.core[namType][numDate] = [];
		}
		var len = reminderfox.core[namType][numDate].length;
		reminderfox.core[namType][numDate][len] = reminder;
	}
}


/**
 * Remove a reminder/todo from 'active/selected' numDaysArray based on .id
 * @param reminder {object}
 * @param namType {string} indicate the array ('numDaysEvents/numDaysTodos')
 *
 *    XXX  the numDaysArray  doesn't work without 'event.date' attribute!!!
 */
reminderfox.core.numDaysModelDelete= function(reminder, namType){
	if (reminder.date) {

		if (!namType) {
			namType = reminderfox_isReminderTabSelected() ? 'numDaysEvents' : 'numDaysTodos';
		}

		if (!reminderfox.core[namType]) return;

		// delete a reminder using .id
		for (var num in reminderfox.core[namType]) {
			for (var m = 0; m < reminderfox.core[namType][num].length; m++) {
				if (reminderfox.core[namType][num][m].id == reminder.id) {
					reminderfox.core.removeFromArray(reminderfox.core[namType][num], m);
					break;
				}
			}
		}
	}
}

/**
 * Read in a file using UTF8 encoding
 */
reminderfox.core.readInFileContents= function(file){
	var is = Components.classes["@mozilla.org/network/file-input-stream;1"]
		.createInstance(Components.interfaces.nsIFileInputStream);
	try {
		is.init(file, 0x01, 00004, null);
	}
	catch (e) {
		reminderfox.core.logMessageLevel("Could not read file: " + file.path + " -- " + e.message
		+ "\n caller : " + reminderfox.util.STACK(0), reminderfox.consts.LOG_LEVEL_INFO);
		return null;
	}

	var converter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"]
		.createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
	converter.charset = /* The character encoding you want, using UTF-8 here */ "UTF-8";

	// Now, read from the stream
	var scriptableStream = Components.classes["@mozilla.org/scriptableinputstream;1"]
		.createInstance(Components.interfaces.nsIScriptableInputStream);
	scriptableStream.init(is);
	var chunk = scriptableStream.read(scriptableStream.available());
	var input = null;
	try {
		input = converter.ConvertToUnicode(chunk);
	}
	catch (e) {
		// if the conversion fails (say importing from a previous version before the conversion code was in place)
		// then just set the input to the read-in value
		input = chunk;
	}
	return input;
};

/*
 * Merge Events/todos into the existing reminders.
 * If Main Dialog is open, will add to it and set [Save] button
 */
reminderfox.core.mergeEvents= function(existingEvents, importedEvents, categories, newerSet){
//------------------------------------------------------------------------------
	var topWindow = reminderfox.util.getWindow("window:reminderFoxEdit");
	if (topWindow) {
		topWindow.focus();
		existingEvents = topWindow.reminderfox.core.getReminderEvents();
	}

	var i;
	var existNo = 0;
	var importNo = 0;
	for (i = 0; i < importedEvents.length; i++) {
		var exists = reminderfox.core.eventExists(existingEvents, importedEvents[i]);

		if (exists == -1) {  // event is unknown, so import it

			importedEvents[i] =reminderfox.core.addCategories(importedEvents[i], categories)
			// add reminder in sorted order...
			var sortedIndex = reminderfox.core.getSortedIndexOfNewReminder(existingEvents, importedEvents[i], false);
			reminderfox.core.insertIntoArray(existingEvents, importedEvents[i], sortedIndex);
			if (topWindow) { 
				topWindow.createUIListItemReminder(importedEvents[i]);
				topWindow.reminderfox.core.numDaysModelAdd(importedEvents[i], 'numDaysEvents');
			}
			importNo++;
		}
		else {
			// with 'newerSet' true an existing reminder is checked against imported using DTSTAMP,
			// if DTSTAMP of existing is smaller the imported will replace the existing;
			// 'importNo' and 'existNo' will be increased
			if ((newerSet) && (reminderfox.core.eventNewer(existingEvents[exists], importedEvents[i]))){
				reminderfox.core.removeFromArray(existingEvents, exists);
				existingEvents.push(importedEvents[i])
				importNo++;
			}
			existNo++;
		}
	}

	if (topWindow) {
		topWindow.reminderfox.core.reminderFoxEvents = existingEvents;
		topWindow.reminderfox.calendar.ui.selectDay('today');	//XXX which day to focus to ?
		topWindow.modifiedReminders();
	}

	return {
		importNo: importNo,
		existNo: existNo
	};
}

reminderfox.core.addCategories= function(reminder, categories){
		if ((!categories) || (categories === "")) return reminder;
		if ((!reminder.categories)||(reminder.categories === "")) {
			reminder.categories = categories
		} else {
			reminder.categories += ',' + categories
		}
	return reminder
}


/*
 * Merge Events/todos into the existing reminders.
 * 
 */
reminderfox.core.mergeTodos= function(existingTodosArray, importedTodosArray, categories, duplicates){
/*--------------------
	var topWindow = reminderfox.util.getWindow("window:reminderFoxEdit");
	if (topWindow) {
		topWindow.focus();

		var _todosArray = topWindow.reminderfox.core.getReminderTodos();

		// if tabName isn't found in _todosArray assume it's a local name -- set to "ToDo's"
		if (_todosArray[newOptions.tabName]) {
			newOptions.tabName = reminderfox.consts.DEFAULT_TODOS_CATEGORY   // "Xtodo";
			currentEvent["X-listID"] = null
		}
	}
------------------__*/
	duplicates = !!duplicates 
	var i;
	var existNo = 0;
	var importNo = 0;
	for (var n in importedTodosArray) {
		var importedTodos = importedTodosArray[n];
		var existingTodos = existingTodosArray[n];

		if (!existingTodos) {
			existingTodos = new Array();
			existingTodosArray[n] = existingTodos;
			for (i = 0; i < importedTodos.length; i++) {
				importedTodos[i] =reminderfox.core.addCategories(importedTodos[i], categories)
				var sortedIndex = reminderfox.core.getSortedIndexOfNewTodo(existingTodos, importedTodos[i]);
				reminderfox.core.insertIntoArray(existingTodos, importedTodos[i], sortedIndex);
				importNo++;
			}
		}
		else {
			for (i = 0; i < importedTodos.length; i++) {
				var exists = reminderfox.core.eventExists(existingTodos, importedTodos[i]);
				if ((exists == -1) || duplicates) {
					importedTodos[i] =reminderfox.core.addCategories(importedTodos[i], categories)
					// add todo in sorted order...
					var sortedIndex = reminderfox.core.getSortedIndexOfNewTodo(existingTodos, importedTodos[i]);
					reminderfox.core.insertIntoArray(existingTodos, importedTodos[i], sortedIndex);
					importNo++;
				}
				else {
					existNo++;
				}
			}
		}
	}
	return {
		importNo: importNo,
		existNo: existNo
	};
}


reminderfox.core.eventExists= function(existingEvents, importedEvent){
	if (!existingEvents) {
		return -1
	}
	for (var i = 0; i < existingEvents.length; i++) {
		if (existingEvents[i].id == importedEvent.id) {
		return i
		}
	}
	return -1;
}

/**
 * Check which events is newer using DTSTAMP
 * @return  true if imported is newer
 */
reminderfox.core.eventNewer= function(existingEvent, importedEvent){

		var existingStamp = reminderfox.core.extraInfo (reminderfox.core.extraInfoArray(existingEvent), 'DTSTAMP')
		var importedStamp = reminderfox.core.extraInfo (reminderfox.core.extraInfoArray(importedEvent), 'DTSTAMP')

		if (existingStamp < importedStamp) return true;
		return false
}


/*
0001: existingEvents[6].extraInfo $[0] = [string] "DTSTAMP:20130913T132041Z\\nSEQUENCE:0\\nTRANSP:OPAQUE"
0001: importedEvent.extraInfo     $[1] = [string] "DTSTAMP:20130913T132806Z\\nSEQUENCE:0\\nTRANSP:OPAQUE"
 */

reminderfox.core.importRemindersUpdateAll= function(isNetworkImport, lastModifiedTime){
	if (lastModifiedTime) {
		reminderfox.core.reminderFox_lastModifiedTime = lastModifiedTime;
		reminderfox.core.storeTimeStamp(reminderfox.core.reminderFox_lastModifiedTime);
	}

	var outputStr = reminderfox.core.constructReminderOutput(reminderfox.core.reminderFoxEvents, reminderfox.core.reminderFoxTodosArray, isNetworkImport);

	// now write file out to filesystem
	var file = reminderfox.core.getReminderStoreFile();
	if (file.exists() === false) {
		file.create(Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420);
	}

	reminderfox.core.writeStringToFile(outputStr, file, false);

	// update all windows with imported reminders
	try {
		var windowEnumerator = reminderfox.core.getWindowEnumerator();

		// update all of the browsers
		while (windowEnumerator.hasMoreElements()) {
			var currentWindow = windowEnumerator.getNext();
			currentWindow.reminderfox.core.reminderFoxEvents = reminderfox.core.reminderFoxEvents;
			currentWindow.reminderfox.core.reminderFoxTodosArray = reminderfox.core.reminderFoxTodosArray;

			currentWindow.reminderfox.overlay.updateRemindersInWindow();
//checkDATA   disabled 2014-06-01 gW			currentWindow.reminderfox.core.clearRemindersAndTodos();
		}
	}
	catch (e) {
	}
}


reminderfox.core.reminderFox_optionsPopulateDateList= function(currentDate){
	var year = parseInt(currentDate.getFullYear(), 10);
	var daylist = document.getElementById('daylist');
	var items = daylist.firstChild.childNodes;
	// remove ending nodes that could possibly be different each month
	// (i.e. any date greater than 28)
	var length = daylist.firstChild.childNodes.length - 1;
	for (var j = length; j >= 28; j--) {
		daylist.firstChild.removeChild(items[j]);
	}

	// now add proper # of days for this month
	var dayArray;
	if (reminderfox.date.isLeapYear(parseInt(year), 10)) {
		dayArray = reminderfox.consts.lDOMonth;
	}
	else {
		dayArray = reminderfox.consts.DOMonth;
	}

	var monthlist = document.getElementById('monthlist');
	var currentMonth = monthlist.selectedIndex;

	var numOfDays = dayArray[currentMonth];
	for (var k = 29; k < numOfDays + 1; k++) {
		var newDay = document.createElement("menuitem");
		var str = k + "";
		newDay.setAttribute("label", str);
		daylist.firstChild.appendChild(newDay);
	}


	// now make sure the dateList is not showing a date greater than
	// the number of days in the selected month; if it is set the list
	// to show the last day of the month
	var dayname = parseInt(daylist.label, 10);

	var numOfDaysInt = parseInt(numOfDays, 10);
	if (dayname > numOfDaysInt) {
		daylist.selectedItem = daylist.firstChild.childNodes[numOfDaysInt - 1];
	}
}


/* SORTING */
reminderfox.core.sortArraySwap= function(array, a, b){
	var tmp = array[a];
	array[a] = array[b];
	array[b] = tmp;
}


reminderfox.core.compareColumnReminder1LessThanDate= function(reminder1, reminder2){
	if (!reminder1.date && reminder2.date) {
		return false
	}
	if (!reminder1.date && reminder2.date) {
		return true
	}
	if (!reminder1.date && !reminder2.date) {
		return reminder1.originalIndex < reminder2.originalIndex;
	}

	// otherwise, they both have dates - compare them
	var compare = reminderfox.core.compareReminderDatesAndTimes(reminder1, reminder2);
	if (compare == -1) {
		return true;
	}
	else
		if (compare == 1) {
			return false;
		}
		else {
			return reminder1.originalIndex < reminder2.originalIndex;
		}
}

reminderfox.core.compareColumnReminder1LessThanReminderCompletedDate= function(reminder1, reminder2){
	var completed1 = reminderfox.core.isCompletedForDate(reminder1, reminder1.date);
	var completed2 = reminderfox.core.isCompletedForDate(reminder2, reminder2.date);

	if (!completed1 && completed2) {
		return false;
	}
	else
		if (completed1 && !completed2) {
			return true;
		}
		else
			if (!completed1 && !completed2) {
				return reminder1.originalIndex < reminder2.originalIndex;
			}

	// otherwise, they both have completed dates - compare them
	var compare = reminderfox.core.compareDates(reminder1.completedDate, reminder2.completedDate);
	if (compare == -1) {
		return true;
	}
	else
		if (compare == 1) {
			return false;
		}
		else {
			return reminder1.originalIndex < reminder2.originalIndex;
		}
}

reminderfox.core.compareColumnReminder1LessThanReminderEndDate= function(reminder1, reminder2){
	if (!reminder1.endDate && reminder2.endDate) {
		return false
	}
	if (reminder1.endDate && !reminder2.endDate) {
		return true
	}
	if (!reminder1.endDate && !reminder2.endDate) {
		return reminder1.originalIndex < reminder2.originalIndex;
	}

	var myEndDate1 = new Date(reminder1.date.getTime() + reminder1.durationTime);
	if (reminder1.allDayEvent) {
		myEndDate1.setDate(myEndDate1.getDate() - 1); // all-day offset
	}

	var myEndDate2 = new Date(reminder2.date.getTime() + reminder2.durationTime);
	if (reminder2.allDayEvent) {
		myEndDate2.setDate(myEndDate2.getDate() - 1); // all-day offset
	}

	// otherwise, they both have dates - compare them
	var compare = reminderfox.core.compareReminderDatesAndTimes(reminder1, reminder2, myEndDate1, myEndDate2);
	if (compare == -1) {
		return true;
	}
	else
		if (compare == 1) {
			return false;
		}
		else {
			return reminder1.originalIndex < reminder2.originalIndex;
		}

}


reminderfox.core.compareColumnReminder1LessThanCompletedDate= function(reminder1, reminder2){
	if (!reminder1.completedDate && reminder2.completedDate) {
		return false;
	}
	else
		if (reminder1.completedDate && !reminder2.completedDate) {
			return true;
		}
		else
			if (!reminder1.completedDate && !reminder2.completedDate) {
				return reminder1.originalIndex < reminder2.originalIndex;
			}

	// otherwise, they both have completed dates - compare them
	var compare = reminderfox.core.compareDates(reminder1.completedDate, reminder2.completedDate);
	if (compare == -1) {
		return true;
	}
	else
		if (compare == 1) {
			return false;
		}
		else {
			return reminder1.originalIndex < reminder2.originalIndex;
		}

}

reminderfox.core.compareColumnReminder1LessThanSummary= function(reminder1, reminder2){
	return reminder1.summary.toLowerCase() < reminder2.summary.toLowerCase();
}

reminderfox.core.compareColumnReminder1LessThanCategory= function(reminder1, reminder2){
	if (!reminder1.categories && !reminder2.categories) {
		return reminder1.originalIndex < reminder2.originalIndex;
	}
	else
		if (!reminder1.categories && reminder2.categories) {
			return false;
		}
		else
			if (reminder1.categories && !reminder2.categories) {
				return true;
			}
			else
				if (reminder1.categories.toLowerCase() == reminder2.categories.toLowerCase()) {
					return reminder1.originalIndex < reminder2.originalIndex;
				}
				else {
					return reminder1.categories.toLowerCase() < reminder2.categories.toLowerCase();
				}
}

// showInTooltip
reminderfox.core.compareColumnReminder1LessThanShowInTooltip= function(reminder1, reminder2){
	if (reminder1.showInTooltip === false && reminder2.showInTooltip == true) {
		return false
	}
	if (reminder1.showInTooltip == true && reminder2.showInTooltip === false) {
		return true;
	}
	else {
		return reminder1.originalIndex < reminder2.originalIndex;
	}
}

// notes
reminderfox.core.compareColumnReminder1LessThanNotes= function(reminder1, reminder2){
	if (!reminder1.notes && reminder2.notes) {
		return false
	}
	if (reminder1.notes && !reminder2.notes) {
		return true;
	}
	else {
		return reminder1.originalIndex < reminder2.originalIndex;
	}
}

// ruc
reminderfox.core.compareColumnReminder1LessThanRUC= function(reminder1, reminder2){
	if (reminder1.remindUntilCompleted == reminderfox.consts.REMIND_UNTIL_COMPLETE_MARKED &&
	(reminder2.remindUntilCompleted == reminderfox.consts.REMIND_UNTIL_COMPLETE_TO_BE_MARKED ||
	reminder2.remindUntilCompleted == reminderfox.consts.REMIND_UNTIL_COMPLETE_NONE)) {
		return true;
	}
	else
		if (reminder1.remindUntilCompleted == reminderfox.consts.REMIND_UNTIL_COMPLETE_TO_BE_MARKED &&
		reminder2.remindUntilCompleted == reminderfox.consts.REMIND_UNTIL_COMPLETE_NONE) {
			return true;
		}
		else
			if (reminder1.remindUntilCompleted == reminderfox.consts.REMIND_UNTIL_COMPLETE_TO_BE_MARKED &&
			reminder2.remindUntilCompleted == reminderfox.consts.REMIND_UNTIL_COMPLETE_MARKED) {
				return false;
			}
			else
				if (reminder1.remindUntilCompleted == reminderfox.consts.REMIND_UNTIL_COMPLETE_NONE &&
				(reminder2.remindUntilCompleted == reminderfox.consts.REMIND_UNTIL_COMPLETE_TO_BE_MARKED ||
				reminder2.remindUntilCompleted == reminderfox.consts.REMIND_UNTIL_COMPLETE_MARKED)) {
					return false;
				}
				else {
					return reminder1.originalIndex < reminder2.originalIndex;
				}
}

// mail
reminderfox.core.compareColumnReminder1LessThanMail= function(reminder1, reminder2){
	if (!reminder1.messageID && reminder2.messageID) {
		return false
	}
	if (reminder1.messageID && !reminder2.messageID) {
		return true;
	}
	else {
		return reminder1.originalIndex < reminder2.originalIndex;
	}
}

// CalDAV
reminderfox.core.compareColumnReminder1LessThanCalDAV= function(reminder1, reminder2){
	if (!reminder1.calDAVid && reminder2.calDAVid) {
		return false
	}
	if (reminder1.calDAVid && !reminder2.calDAVid) {
		return true;
	}
	else {
		return reminder1.calDAVid < reminder2.calDAVid;
	}
}

// alarm
reminderfox.core.compareColumnReminder1LessThanAlarm= function(reminder1, reminder2){
	if (!reminder1.alarm && reminder2.alarm) {
		return false
	}
	if (reminder1.alarm && !reminder2.alarm) {
		return true;
	}
	else {
		return reminder1.originalIndex < reminder2.originalIndex;
	}
}

// time
reminderfox.core.compareColumnReminder1LessThanTime= function(reminder1, reminder2){
	if (!reminder1.allDayEvent && reminder2.allDayEvent) {
		return true
	}
	if (reminder1.allDayEvent && !reminder2.allDayEvent) {
		return false;
	}
	if (!reminder1.date && reminder2.date) {
		return false
	}
	if (reminder1.date && !reminder2.date) {
		return true
	}

	if (reminder1.date && reminder2.date) {
		if (reminder1.date.getHours() < reminder2.date.getHours()) {
			return true;
		}
		else
			if (reminder1.date.getHours() > reminder2.date.getHours()) {
				return false;
			}
			else {
				if (reminder1.date.getMinutes() < reminder2.date.getMinutes()) {
					return true;
				}
				else
					if (reminder1.date.getMinutes() > reminder2.date.getMinutes()) {
						return false;
					}
					else {
						// same time
						return reminder1.originalIndex < reminder2.originalIndex;
					}
			}
	}
	else {
		return reminder1.originalIndex < reminder2.originalIndex;
	}
}

reminderfox.core.compareColumnReminder1LessThanRepeat= function(reminder1, reminder2){
	// yearly/monthly/weekly/daily/none -->
	if (reminder1.recurrence.type == reminder2.recurrence.type) {
		return reminder1.originalIndex < reminder2.originalIndex;
	}

	if (reminder1.recurrence.type == reminderfox.consts.RECURRENCE_ONETIME) {
		return false;
	}
	else
		if (reminder2.recurrence.type == reminderfox.consts.RECURRENCE_ONETIME) {
			return true;
		}
		else
			if (reminder1.recurrence.type == reminderfox.consts.RECURRENCE_YEARLY) {
				return true;
			}
			else
				if (reminder2.recurrence.type == reminderfox.consts.RECURRENCE_YEARLY) {
					return false;
				}
				else
					if (reminder1.recurrence.type == reminderfox.consts.RECURRENCE_YEARLY_DAY) {
						if (reminder2.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY_DAY &&
						reminder2.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY) {
							return true;
						}
					}
					else
						if (reminder2.recurrence.type == reminderfox.consts.RECURRENCE_YEARLY_DAY) {
							if (reminder1.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY_DAY &&
							reminder1.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY) {
								return false;
							}
						}
						else
							if (reminder1.recurrence.type == reminderfox.consts.RECURRENCE_MONTHLY_DATE) {
								if (reminder2.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY_DAY &&
								reminder2.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY &&
								reminder2.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DATE) {
									return true;
								}
							}
							else
								if (reminder2.recurrence.type == reminderfox.consts.RECURRENCE_MONTHLY_DATE) {
									if (reminder1.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY_DAY &&
									reminder1.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY &&
									reminder1.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DATE) {
										return false;
									}
								}
								else
									if (reminder1.recurrence.type == reminderfox.consts.RECURRENCE_MONTHLY_DAY) {
										if (reminder2.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY_DAY &&
										reminder2.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY &&
										reminder2.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DATE &&
										reminder2.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DAY) {
											return true;
										}
									}
									else
										if (reminder2.recurrence.type == reminderfox.consts.RECURRENCE_MONTHLY_DAY) {
											if (reminder1.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY_DAY &&
											reminder1.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY &&
											reminder1.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DATE &&
											reminder1.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DAY) {
												return false;
											}
										}
										else
											if (reminder1.recurrence.type == reminderfox.consts.RECURRENCE_WEEKLY) {
												if (reminder2.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY_DAY &&
												reminder2.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY &&
												reminder2.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DATE &&
												reminder2.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DAY &&
												reminder2.recurrence.type != reminderfox.consts.RECURRENCE_WEEKLY) {
													return true;
												}
											}
											else
												if (reminder2.recurrence.type == reminderfox.consts.RECURRENCE_WEEKLY) {
													if (reminder1.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY_DAY &&
													reminder1.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY &&
													reminder1.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DATE &&
													reminder1.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DAY &&
													reminder1.recurrence.type != reminderfox.consts.RECURRENCE_WEEKLY) {
														return false;
													}
												}
												else
													if (reminder1.recurrence.type == reminderfox.consts.RECURRENCE_DAILY) {
														if (reminder2.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY_DAY &&
														reminder2.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY &&
														reminder2.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DATE &&
														reminder2.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DAY &&
														reminder2.recurrence.type != reminderfox.consts.RECURRENCE_WEEKLY &&
														reminder2.recurrence.type != reminderfox.consts.RECURRENCE_DAILY) {
															return true;
														}
													}
													else
														if (reminder2.recurrence.type == reminderfox.consts.RECURRENCE_DAILY) {
															if (reminder1.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY_DAY &&
															reminder1.recurrence.type != reminderfox.consts.RECURRENCE_YEARLY &&
															reminder1.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DATE &&
															reminder1.recurrence.type != reminderfox.consts.RECURRENCE_MONTHLY_DAY &&
															reminder1.recurrence.type != reminderfox.consts.RECURRENCE_WEEKLY &&
															reminder1.recurrence.type != reminderfox.consts.RECURRENCE_DAILY) {
																return false;
															}
														}

	return reminder1.originalIndex < reminder2.originalIndex;
}

reminderfox.core.compareColumnReminder1LessThan= function(reminder1, reminder2, column){
	// todos
	if (column == "todoDateColLabel") {
		return reminderfox.core.compareColumnReminder1LessThanDate(reminder1, reminder2);
	}
	else
		if (column == "todoEndDateColLabel") {
			return reminderfox.core.compareColumnReminder1LessThanReminderEndDate(reminder1, reminder2);
		}
		else
			if (column == "todoDescColLabel") {
				return reminderfox.core.compareColumnReminder1LessThanSummary(reminder1, reminder2);
			}
			else
				if (column == "todoDateCompleted") {
					return reminderfox.core.compareColumnReminder1LessThanCompletedDate(reminder1, reminder2);
				}
				else
					if (column == "todoCompleteColLabel") {
						return reminderfox.core.compareColumnReminder1LessThanCompletedDate(reminder1, reminder2);
					}
					else
						if (column == "todoShowInTooltip") {
							return reminderfox.core.compareColumnReminder1LessThanShowInTooltip(reminder1, reminder2);
						}
						else
							if (column == "todoTimeColLabel") {
								return reminderfox.core.compareColumnReminder1LessThanTime(reminder1, reminder2);
							}
							else
								if (column == "todoAlarmColLabel") {
									return reminderfox.core.compareColumnReminder1LessThanAlarm(reminder1, reminder2);
								}
								else
									if (column == "todoNotesColLabel") {
										return reminderfox.core.compareColumnReminder1LessThanNotes(reminder1, reminder2);
									}
									else
										if (column == "todoMailColLabel") {
											return reminderfox.core.compareColumnReminder1LessThanMail(reminder1, reminder2);
										}
										else
											if (column == "todoCatColLabel") {
												return reminderfox.core.compareColumnReminder1LessThanCategory(reminder1, reminder2);
											}


											// reminders

											else
												if (column == "descColLabel") {
													return reminderfox.core.compareColumnReminder1LessThanSummary(reminder1, reminder2);
												}
												else
													if (column == "dateColLabel") {
														return reminderfox.core.compareColumnReminder1LessThanDate(reminder1, reminder2);
													}
													else
														if (column == "endDateColLabel") {
															return reminderfox.core.compareColumnReminder1LessThanReminderEndDate(reminder1, reminder2);
														}
														else
															if (column == "timeColLabel") {
																return reminderfox.core.compareColumnReminder1LessThanTime(reminder1, reminder2);
															}
															else
																if (column == "dateCompleted") {
																	return reminderfox.core.compareColumnReminder1LessThanReminderCompletedDate(reminder1, reminder2);
																}
																else
																	if (column == "repeatColLabel") {
																		return reminderfox.core.compareColumnReminder1LessThanRepeat(reminder1, reminder2);
																	}
																	else
																		if (column == "completeColLabel") {
																			return reminderfox.core.compareColumnReminder1LessThanReminderCompletedDate(reminder1, reminder2);
																		}
																		else
																			if (column == "remindUntilCompletedColLabel") {
																				return reminderfox.core.compareColumnReminder1LessThanRUC(reminder1, reminder2);
																			}
																			else
																				if (column == "notesColLabel") {
																					return reminderfox.core.compareColumnReminder1LessThanNotes(reminder1, reminder2);
																				}
																				else
																					if (column == "alarmColLabel") {
																						return reminderfox.core.compareColumnReminder1LessThanAlarm(reminder1, reminder2);
																					}
																					else
																						if (column == "mailColLabel") {
																							return reminderfox.core.compareColumnReminder1LessThanMail(reminder1, reminder2);
																						}
																						else
																							if (column == "catColLabel") {
																								return reminderfox.core.compareColumnReminder1LessThanCategory(reminder1, reminder2);
																							}
																							else 
			/* //XXXCalDAV */																if (column == "calDAVcolLabel") {
																									return reminderfox.core.compareColumnReminder1LessThanCalDAV(reminder1, reminder2);
																								}
																								else 
																									return false;
}

reminderfox.core.sortPartitionQuickAlarm= function(array, begin, end, pivot, sortDir){
	var piv = array[pivot];
	reminderfox.core.sortArraySwap(array, pivot, end - 1);
	var store = begin;
	var ix;
	for (ix = begin; ix < end - 1; ++ix) {
		var lessThan = array[ix].alarmTime < piv.alarmTime;
		if (sortDir == 1) {
			lessThan = !lessThan;
		}

		if (lessThan) {
			reminderfox.core.sortArraySwap(array, store, ix);
			++store;
		}
	}
	reminderfox.core.sortArraySwap(array, end - 1, store);

	return store;
}



reminderfox.core.qsortQuickArray= function(array, begin, end, sortDir){
	if (end - 1 > begin) {
		var pivot = begin + Math.floor(Math.random() * (end - begin));

		pivot = reminderfox.core.sortPartitionQuickAlarm(array, begin, end, pivot, sortDir);

		reminderfox.core.qsortQuickArray(array, begin, pivot, sortDir);
		reminderfox.core.qsortQuickArray(array, pivot + 1, end, sortDir);
	}
}

// quicksort
reminderfox.core.quick_sort_QuickArray= function(array, sortDir){
	reminderfox.core.qsortQuickArray(array, 0, array.length, sortDir);
}







reminderfox.core.sortPartition= function(array, begin, end, pivot, column, sortDir){
	var piv = array[pivot];
	reminderfox.core.sortArraySwap(array, pivot, end - 1);
	var store = begin;
	var ix;
	for (ix = begin; ix < end - 1; ++ix) {
		var lessThan = reminderfox.core.compareColumnReminder1LessThan( array[ix], piv, column );
		if (sortDir == reminderfox.consts.SORT_DIRECTION_DESCENDING) {
			lessThan = !lessThan;
		}

		if (lessThan) {
			reminderfox.core.sortArraySwap(array, store, ix);
			++store;
		}
	}
	reminderfox.core.sortArraySwap(array, end - 1, store);

	return store;
}



reminderfox.core.qsort= function(array, begin, end, column, sortDir){
	if (end - 1 > begin) {
		var pivot = begin + Math.floor(Math.random() * (end - begin));

		pivot = reminderfox.core.sortPartition(array, begin, end, pivot, column, sortDir);

		reminderfox.core.qsort(array, begin, pivot, column, sortDir);
		reminderfox.core.qsort(array, pivot + 1, end, column, sortDir);
	}
}

// quicksort
reminderfox.core.quick_sort= function(array, column, sortDir){
	reminderfox.core.qsort(array, 0, array.length, column, sortDir);
}


/**
 * Adds the new reminder from the "Edit Reminder" dialog
 * 'date' is focused to selected date on Calendar/List if not less than 'today'
 * @param {object} event passed to be added
 * @param {boolean} useTodaysDate  the 'date' will be focused current date, but in selected year
 */
reminderfox.core.addReminder= function (newReminderToBeAdded, selectedDate){
	if (!selectedDate) selectedDate = new Date();

	var todaysDate = new Date();
	if ((selectedDate.getHours() === 0) && (selectedDate.getMinutes() === 0)) {
		selectedDate.setHours(todaysDate.getHours());
	}
	var newSelectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 
		selectedDate.getDate(), todaysDate.getHours(), todaysDate.getMinutes());

	if (!newReminderToBeAdded) {
		var reminderId = reminderfox.core.generateUniqueReminderId(selectedDate);
		newReminderToBeAdded = new reminderfox.core.ReminderFoxEvent(reminderId, selectedDate, "");
	}

	if (!newReminderToBeAdded.endDate) {
		newReminderToBeAdded.endDate = new Date(newReminderToBeAdded.date.getFullYear(),
			newReminderToBeAdded.date.getMonth(),
			newReminderToBeAdded.date.getDate(),
			newReminderToBeAdded.date.getHours() + 1, newReminderToBeAdded.date.getMinutes());
	}
	reminderfox.core.addReminderHeadlessly (newReminderToBeAdded);
}


reminderfox.core.addTodo= function (newTodo, thisDate){
	var selectedDate;
	if (typeof(thisDate) == "object") {
		selectedDate = thisDate; 
		thisDate = true;
	} else
		if (thisDate == true) selectedDate = new Date();
		else 
			selectedDate = reminderfox.datePicker.gSelectedDate;

	var todaysDate = new Date();
	if ((selectedDate.getHours() === 0) && (selectedDate.getMinutes() === 0)) {
		selectedDate.setHours(todaysDate.getHours());
	}

	if (thisDate) {
		// use today's date (but the selected year...)
		selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
	}

	var tab = reminderfox.tabInfo.tabName;
	var tabID = reminderfox.tabInfo.tabID;
	var tabIndex = reminderfox.tabInfo.tabIndex;

	if (!newTodo) {
		var todoId = reminderfox.core.generateUniqueReminderId();
		newTodo = new reminderfox.core.ReminderFoxTodo(todoId, "");
		newTodo.date = selectedDate;

		if (tab.indexOf(':') == -1) {
			var showInTooltipDefault = reminderfox.core.getPreferenceValue(reminderfox.consts.DEFAULT_SHOW_IN_TOOLTIP);
			if (showInTooltipDefault || newTodo.showInTooltip == true) {
				newTodo.showInTooltip = true;
			}
			else {
				newTodo.showInTooltip = false;
			}
		}
		else {
			newTodo.showInTooltip = false; // for custom lists, default to false for show in tooltip
		}
	}
	reminderfox.core.addReminderHeadlessly (newTodo, false /*isEdit*/, true /*isTodo*/);
}


reminderfox.core.addReminderHeadlessly= function(originalReminder, isEdit, isTodo) {
//------------------------------------------------------------------------------
var logMsg ="core.addReminderHeadlessly   originalReminder: " +originalReminder.summary;
reminderfox.util.Logger('addTest', logMsg);

	isEdit = !!isEdit;
	// make sure parameters set, if null --> false
	isTodo = !!isTodo;

	var oldTabName = "";
	if(!isTodo){
		var currentReminder = reminderfox.core.cloneReminderFoxEvent(originalReminder);
		oldTabName = reminderfox.consts.DEFAULT_REMINDERS_CATEGORY // "Xreminder"
	}

	if(isTodo){
		oldTabName = reminderfox.consts.DEFAULT_TODOS_CATEGORY  // "Xtodo"

		var tabName = document.getElementById("rmFx-tabName")
		if (tabName) oldTabName = document.getElementById("rmFx-tabName").getAttribute('ID')

		if ( originalReminder["X-listID"]) {
			oldTabName = "reminderFoxList:" + originalReminder["X-listID"]
		}
		var currentReminder = reminderfox.core.cloneReminderFoxTodo(originalReminder);
	}
	reminderfox.tabInfo.tabID = oldTabName;

	if (!reminderfox.calDAV.accounts) reminderfox.calDAV.accountsReadIn();


	if((originalReminder.calDAVid) && (originalReminder.calDAVid !== ""))
		currentReminder.calDAVidOriginal = originalReminder.calDAVid

	var newOptions = {
		reminder : currentReminder,
		editing : isEdit,
		OK : false,
		isTodo : isTodo,
		tabInfo : reminderfox.tabInfo,
		calDAVid : "",
		calDAVaccounts : reminderfox.calDAV.accounts
	};

	window.openDialog("chrome://reminderfox/content/editing/reminderEventDialog.xul", "reminderOptionsDialog", "chrome,resizable,modal", newOptions);
/*----
reminderfox.util.Logger('Alert',"  new/edited reminder : " + newOptions.reminder.summary +  "  isEdit: " + isEdit
	+"\n  date: " + newOptions.reminder.date.toLocaleString()
	+"\n oldTAB: " + newOptions.tabInfo.tabID / *oldTabName* / + "   newTAB: " + newOptions.tabName / *newTabName* /
	+"\n calDAVidOriginal >>" + currentReminder.calDAVidOriginal + "<<    calDAVid >>" + currentReminder.calDAVid + "<<")
---*/

	if(newOptions.OK) { // true if Add/Edit was closed with [OK]; false for [Cancel]
		currentReminder = newOptions.reminder;

		if (newOptions.tabName == 'Xtodo') currentReminder["X-listID"] = null;

		//   3.2.2.1 Rescheduling an Event:
		//   A rescheduled event involves time or recurrence intervals
		//   and possibly the location or description
		reminderfox.util.JS.dispatch('iCalMail');
		reminderfox.iCal.reschedule(originalReminder, currentReminder);
		reminderfox.util.JS.dispatch('calDAV');

		var currentDate = new Date();
		if(currentReminder.alarm)
			currentReminder.alarmLastAcknowledge = currentDate.getTime();
		currentReminder.lastModified = reminderfox.date.getDateAsString(currentDate);

		var topWindow = reminderfox.util.getWindow("window:reminderFoxEdit");


		if(topWindow) { // check if the "Main Dialog" is open
			reminderfox.core.updateMainDialog (currentReminder, newOptions.tabInfo.tabID /*oldTabName*/, newOptions.tabName /*newTabName*/) 
		}

		else {// Main Dialog CLOSED!  Need to update local and remote files

			if(newOptions.tabName == reminderfox.consts.DEFAULT_REMINDERS_CATEGORY /* Xreminder */) {
				//  mainDialog CLOSED  ....  'Reminders' ---------------------------------
				// remove this event if it already exists, so it will be replaced
				var reminders = reminderfox.core.getReminderEvents();
				reminderfox.core.removeReminderFromDataModels(currentReminder)

				var sortedIndex = reminderfox.core.getSortedIndexOfNewReminder(reminders, currentReminder, false);
				reminderfox.core.insertIntoArray(reminders, currentReminder, sortedIndex);

				rmFx_CalDAV_UpdateReminder(currentReminder);
			}

			else { // mainDialog CLOSED  .... 'Todo' or List -----------------------------------

				// add todo in sorted order...
				var _todosArray = reminderfox.core.getReminderTodos();
				var todos = _todosArray[newOptions.tabName];
				//  get list
				if(!todos) {
					todos = new Array();
					_todosArray[newOptions.tabName] = todos;
				}
				reminderfox.core.removeReminderFromDataModels(currentReminder, todos)

				var sortedIndex = reminderfox.core.getSortedIndexOfNewTodo(todos, currentReminder);
				reminderfox.core.insertIntoArray(todos, currentReminder, sortedIndex);
			} // end of ... mainDialog CLOSED  .... 'Todo' or List

			reminderfox.overlay.processRecentReminders();
	
			reminderfox.core.writeOutRemindersAndTodos(false);
			reminderfox.core.syncWrittenChangesToRemote();

			try {// update all of the browsers
				var windowEnumerator = reminderfox.core.getWindowEnumerator();
				while(windowEnumerator.hasMoreElements()) {
					var currentWindow = windowEnumerator.getNext();
					currentWindow.reminderfox.core.reminderFoxEvents = reminderfox.core.reminderFoxEvents;
					currentWindow.reminderfox.core.reminderFoxTodosArray = reminderfox.core.reminderFoxTodosArray;

					currentWindow.reminderfox.overlay.updateRemindersInWindow();
					currentWindow.reminderfox.core.clearRemindersAndTodos();
					currentWindow.reminderfox.core.lastEvent = currentReminder;
				}
			} catch (e) {}
		}  //  end   Main Dialog closed 

		reminderfox.core.lastEvent = currentReminder;
		return newOptions.OK;
	} // (newOptions.addEvent)

	return false;
};


/**
 * Update a reminder(event or todo) on main list and calendar array 
*/
reminderfox.core.updateMainDialog= function (currentReminder, oldTabName, newTabName) {
//---------------------------------------------------------------------------------
var msglog = "  core.updateMainDialog  currentReminder: " + currentReminder.summary
reminderfox.util.Logger("ALERT", msglog);

	if (!oldTabName) oldTabName = reminderfox.tabInfo.tabID
	if (!newTabName) newTabName = oldTabName

	var topWindow = reminderfox.util.getWindow("window:reminderFoxEdit");
	if(!topWindow)  return  // need  the "Main Dialog" is open

	topWindow.focus()

	if(newTabName == reminderfox.consts.DEFAULT_REMINDERS_CATEGORY) { // Xreminder 
		// ..... 'Reminders' ------------------------------
		// --- make sure to delete on 'source' tab
		// --- remove this event if it already exists, so it will be replaced
		// --- remove event, could be a 'todo' due to list change in dialog!

		if (oldTabName == reminderfox.consts.DEFAULT_REMINDERS_CATEGORY) {   // 'Xreminder'
			reminderfox.core.removeReminderFromDataModels(currentReminder)

		} else {  //  ***** moved from 'todos ***** 
			var _todosArray = topWindow.reminderfox.core.getReminderTodos();
			if (!_todosArray[oldTabName]) {
				oldTabName = reminderfox.consts.DEFAULT_TODOS_CATEGORY // "Xtodo";
			}

			// remove from UI list   ATTENTION with Calendar ONLY !!!!
			var oldtodos = _todosArray[oldTabName];
			topWindow.reminderfox.core.removeReminderFromDataModels(currentReminder, oldtodos)
		}

		var reminders = reminderfox.core.getReminderEvents();
		var sortedIndex = reminderfox.core.getSortedIndexOfNewReminder(reminders, currentReminder, false);
		reminderfox.core.insertIntoArray(reminders, currentReminder, sortedIndex);
		topWindow.reminderfox.core.reminderFoxEvents = reminders;

		topWindow.reminderfox.core.lastEvent = currentReminder;

		var selectDate = (!currentReminder.instanceDate) ? currentReminder.date : currentReminder.instanceDate

		topWindow.reminderfox.core.numDaysModelAdd(currentReminder, 'numDaysEvents');

		topWindow.reminderfox.calendar.ui.selectDay(selectDate);		//this builds the whole fillList also
		topWindow.modifiedReminders();

		// CalDAV with "VEVENT"
		if((currentReminder.calDAVidOriginal != null) && (currentReminder.calDAVid == "")) {
			topWindow.rmFx_CalDAV_ReminderDelete(currentReminder);

		} else if ((currentReminder.calDAVidOriginal != null) && (currentReminder.calDAVid != currentReminder.calDAVidOriginal)) {
			topWindow.rmFx_CalDAV_ReminderMoved (currentReminder);

		} else {
			// CalDAV   update on server
			topWindow.rmFx_CalDAV_UpdateReminder(currentReminder);
		}
		setTimeout(function () { highlightClosestUpcomingReminder (reminderfox.datePicker.gSelectedDate, //gW 2014-0806
			'fillList sorted', currentReminder)},0);
	} // end 'Reminders' ............


	else { // 'Todo' or List -------'Xtodo' or tabName 
		var _todosArray = topWindow.reminderfox.core.getReminderTodos();

		// if tabName isn't found in _todosArray assume it's a local name -- set to "ToDo's"
		if (!_todosArray[newTabName]) {
			newTabName = reminderfox.consts.DEFAULT_TODOS_CATEGORY   // "Xtodo";
			currentReminder["X-listID"] = null
		}

		// --- make sure to delete on 'source' tab 
		var tab_Name = oldTabName
		var index = tab_Name.indexOf(':');
		if (index >0 ) tab_Name = tab_Name.substring(index + 1, tab_Name.length);

		if (oldTabName != 'Xreminder'){ // not  reminder type
			if (!_todosArray[tab_Name]) {
				oldTabName = reminderfox.consts.DEFAULT_TODOS_CATEGORY   // "Xtodo";
			}

			// remove from UI list   ATTENTION with Calendar ONLY !!!!
			var oldtodos = _todosArray[tab_Name];
			reminderfox.core.removeReminderFromDataModels(currentReminder, oldtodos)

		} else {  //  ***** moved from 'reminders ***** 
			// remove from UI list   ATTENTION with Calendar ONLY !!!!
			reminderfox.core.removeReminderFromDataModels(currentReminder)
		}

		// make sure to have the X-listID for the 'todo'/currentReminder
		if(newTabName != reminderfox.consts.DEFAULT_TODOS_CATEGORY )  // "Xtodo"
			currentReminder['X-listID'] = newTabName;

		reminderfox.core.numDaysModelAdd(currentReminder, 'numDaysTodos');

		var todos = _todosArray[newTabName]
		var sortedIndex = topWindow.reminderfox.core.getSortedIndexOfNewTodo(todos, currentReminder);
		reminderfox.core.insertIntoArray(todos, currentReminder, sortedIndex);

		this.reminderFoxTodosArray = _todosArray
		topWindow.reminderfox.calendar.ui.selectDay(currentReminder.date);
		topWindow.modifiedReminders();

		// "VTODO" with CalDAV/Remote Calendar 
		if((currentReminder.calDAVidOriginal != null) && (currentReminder.calDAVid == "")) {
			topWindow.rmFx_CalDAV_ReminderDelete(currentReminder);
		}

		else if((currentReminder.calDAVidOriginal != null) && (currentReminder.calDAVid != currentReminder.calDAVidOriginal)) {
			topWindow.rmFx_CalDAV_ReminderMoved (currentReminder);

		} else {
			// CalDAV   update on server
			topWindow.rmFx_CalDAV_UpdateReminder(currentReminder);
		}
	} // end  .....'Todo' or List
}


/**
 *  post-process if called from app's calendar icon
 *  if the RmFx Main Dialog/List is opened, then update
 *  if not, go to store to file
 */
reminderfox.core.storeOrUpdate= function(lastEvent){

	var topWindow = reminderfox.util.getWindow("window:reminderFoxEdit");
	if (reminderfox.calendar.layout.status == -1) {  //	layout.status -1  is from FX/TB Main Menu icon all 

		if (!topWindow) reminderfox.core.writeOutRemindersAndTodos(false);
		if (topWindow) {
			topWindow.reminderfox.calendar.ui.selectDay(lastEvent.date)
			topWindow.modifiedReminders();
		}
	}
};


reminderfox.core.firstStart= function(){
	//  If this is the very first ReminderFox start (no existing 'reminder.ics' file available),
	//  we construct a 'Welcome ReminderFox' reminder.
	var rmStoreFile = reminderfox.core.getReminderStoreFile();
	if (!rmStoreFile || !rmStoreFile.exists()) {
		var todaysDate = new Date();
		var reminderId = reminderfox.core.generateUniqueReminderId(todaysDate);
		var newReminderToBeAdded = new reminderfox.core.ReminderFoxEvent(reminderId, todaysDate, reminderfox.string("rf.welcome.header"));
		newReminderToBeAdded.notes = reminderfox.string("rf.welcome.notes");
		newReminderToBeAdded.url = reminderfox.string("rf.faqURL");

		// For performance on initial load, don't read file - just create new reminder in array
		//var reminders = reminderfox.core.getReminderEvents();
		reminderfox.core.reminderFoxEvents = new Array();
		reminderfox.core.reminderFoxTodosArray = {};
		reminderfox.core.reminderFoxEvents[0] = newReminderToBeAdded;
		
		// load the foxy icon
		var defaultToolBar = ("@mozilla.org/messenger;1" in Components.classes)
			? "tabbar-toolbar" : "nav-bar";
		reminderfox.core.installButton(defaultToolBar, "reminderFox_openButton");
		

		// TODO: delay // 2 seconds
		reminderfox.core.writeOutRemindersAndTodos(false);		// this is for first start 

		// add default views;
		// we will delay on very first install for performance
		var windowEnumerator = reminderfox.core.getWindowEnumerator();
		if (windowEnumerator.hasMoreElements()) {
			var oldestWindow = windowEnumerator.getNext();
			oldestWindow.setTimeout(function() { oldestWindow.reminderfox.core.migrate_defaultView('Set') }, 5000);
		}
	}
}


reminderfox.core.convertReminderToTodo= function(currentReminder){
	var newTodo = new reminderfox.core.ReminderFoxTodo(currentReminder.id, currentReminder.summary, currentReminder.date);
	newTodo.notes = currentReminder.notes;
	newTodo.priority = currentReminder.priority;
	newTodo.messageID = currentReminder.messageID;
	newTodo.completedDate = currentReminder.completedDate;
	newTodo.endDate = currentReminder.endDate;
	newTodo.durationTime = currentReminder.durationTime;
	newTodo.allDayEvent = currentReminder.allDayEvent;
	newTodo.alarm = currentReminder.alarm;
	newTodo.alarmLastAcknowledge = currentReminder.alarmLastAcknowledge;
	newTodo.snoozeTime = currentReminder.snoozeTime;
	newTodo.recurrence = currentReminder.recurrence;
	newTodo.extraInfo = currentReminder.extraInfo;
	newTodo.categories = currentReminder.categories;
	newTodo.location = currentReminder.location;
	newTodo.url = currentReminder.url;
	return newTodo;
}

reminderfox.core.convertTodoToReminder= function(currentTodo){
	var newReminder = new reminderfox.core.ReminderFoxEvent(currentTodo.id, currentTodo.date, currentTodo.summary);
	newReminder.notes = currentTodo.notes;
	newReminder.priority = currentTodo.priority;
	newReminder.messageID = currentTodo.messageID;
	newReminder.completedDate = currentTodo.completedDate;
	newReminder.endDate = currentTodo.endDate;
	newReminder.durationTime = currentTodo.durationTime;
	newReminder.allDayEvent = currentTodo.allDayEvent;
	newReminder.alarm = currentTodo.alarm;
	newReminder.alarmLastAcknowledge = currentTodo.alarmLastAcknowledge;
	newReminder.snoozeTime = currentTodo.snoozeTime;
	newReminder.recurrence = currentTodo.recurrence;
	newReminder.extraInfo = currentTodo.extraInfo;
	newReminder.categories = currentTodo.categories;
	newReminder.location = currentTodo.location;
	newReminder.url = currentTodo.url;
	return newReminder;
}


reminderfox.core.getAllReminderTodos= function(){
	var allTodos = new Array();
	var _todosArray = reminderfox.core.getReminderTodos(); // iterate over all reminders
	for (var n in _todosArray) {
		var reminderFoxTodos = _todosArray[n];
		for (var i = 0; i < reminderFoxTodos.length; i++) {
			allTodos[allTodos.length] = reminderFoxTodos[i];
		}
	}
	return allTodos;
}

reminderfox.core.getValidCustomTodoLists= function(){
	var todoListsRet = new Array();
	var todoLists = reminderfox.core.getPreferenceValue(reminderfox.consts.TODO_LISTS);
	if (todoLists && todoLists.length > 0) {
		var subscriptions = reminderfox.core.getSubscriptions();
		var todoListsArray = todoLists.split(",");
		for (var i = 0; i < todoListsArray.length; i++) {
			var listItem = todoListsArray[i];
			if (!subscriptions[listItem]) {
				todoListsRet[todoListsRet.length] = listItem;
			}
		}
	}
	return todoListsRet;
}


reminderfox.core.getAllCustomTodoLists= function(){
	var todoListsRet = new Array();
	var todoLists = reminderfox.core.getPreferenceValue(reminderfox.consts.TODO_LISTS);
	if (todoLists && todoLists.length > 0) {
		var todoListsArray = todoLists.split(",");
		for (var i = 0; i < todoListsArray.length; i++) {
			var listItem = todoListsArray[i];
			todoListsRet[todoListsRet.length] = listItem;
		}
	}
	return todoListsRet;
}

reminderfox.core.getSubscriptions= function(){
	var subscriptionsArray = {};
	var todoLists = reminderfox.core.getPreferenceValue(reminderfox.consts.SUBSCRIPTIONS);
	if (todoLists && todoLists.length > 0) {
		var todoListsArray = todoLists.split(",");
		for (var i = 0; i < todoListsArray.length; i++) {
			var listItem = todoListsArray[i];
			var subscription = listItem.indexOf("=");
			var listName = listItem.substring(0, subscription);
			var subscriptionURL = listItem.substring(subscription + 1);
			subscriptionsArray[listName] = subscriptionURL;
		}
	}
	return subscriptionsArray;
}

/**
 * Write subscriptions array as a text string to prefs 
 */
reminderfox.core.writeSubscriptions= function(subscriptions){
	var subscriptionsStr = "";
	for (var listName in subscriptions) {
		var subUrl = subscriptions[listName];
		if (subUrl && subUrl.length > 0) {
			if (subscriptionsStr.length > 0) {
				subscriptionsStr = subscriptionsStr + "," + listName + "=" + subUrl;
			}
			else {
				subscriptionsStr = listName + "=" + subUrl;
			}
		}
	}
	reminderfox.core.setUnicodePref(reminderfox.consts.SUBSCRIPTIONS, subscriptionsStr);

}


/////////////////////////// .core. Utilities ///////////////////////////////////

reminderfox.core.readCategories2prefs= function (){
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	var rmCategoriesStandard = null;

	try {
		rmCategoriesStandard = reminderfox.core.getPreferenceValue(reminderfox.consts.CATEGORIES);
	}
	catch (e) {
		rmCategoriesStandard = "";
	}
	if (rmCategoriesStandard === "") {
		reminderfox.core.writeCategories2prefs(rmCategoriesStandard); /* write back eg. to initialize with default values  */
	}
	return rmCategoriesStandard;
}


reminderfox.core.writeCategories2prefs= function (rmCategoriesStandard){
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	reminderfox.core.setUnicodePref(reminderfox.consts.CATEGORIES, rmCategoriesStandard);
}

// gW 2012-07  ... currently used with 'Options'  only
reminderfox.core.add2Textbox= function(xThis, addID, separator){
	// -------------------------------------------------------------------------
	var cString = xThis.childNodes[xThis._lastSelectedRow].childNodes[0].childNodes[0].attributes[0].value;
	var newString = "";
	var currentText = document.getElementById(addID);
	var part1 = currentText.value.substring(0, currentText.selectionStart);
	var part2 = currentText.value.substring(currentText.selectionEnd, currentText.textLength);

	// check for duplicate entries; warn and don't add
	if ((currentText.value).indexOf(cString) > -1) {
		alert(reminderfox.string('rf.reminder.noduplicate') + " " + cString);
		return;
	}

	if (part1 === "") newString = cString + separator + part2
	else if (part2 === "") newString = part1 + separator +cString
	else  newString = part1 + separator + cString + separator + part2;

	document.getElementById(addID).value = newString;
}


/**
 *  Generic function to set 'RmFx Status'
 *  @param {string} status text
 *  @param {boolean} any value to output
 */
reminderfox.core.statusSet= function(text, panel){
	// -------------------------------------------------------------------------
	// comment out by tfm on 10/03/2010...  if "" text was not immediately set,
	// it was causing the case where "Downloading subscribed reminders" message
	// would be displayed for 10 seconds after it had completed.
	// So we will instead immediately set any "" text
	//if (text === "" ){ return;}

	if (text && text !== "") {
		reminderfox.core.logMessageLevel("ReminderFox -- Status: " + text,
				reminderfox.consts.LOG_LEVEL_INFO);

		if (panel != false) {
			var statusInfoPanel = document.getElementById("rmFx_status-panel");
			if (statusInfoPanel) {
				var anchor = document.getElementById("panel-Anchor");
				document.getElementById("rmFx_status-panel-text").value = text;

				statusInfoPanel.removeAttribute('hidden');
				statusInfoPanel.openPopup(anchor, 'after_end', 6, -24)
				// XXX   using 'fade'  ?????
				setTimeout(function() {reminderfox.core.statusReset ()},6000);
			}
		};
	};
};


/**
 *  Generic function to reset 'RmFx Status'
 */
reminderfox.core.statusReset= function(){
	// -------------------------------------------------------------------------
	document.getElementById("rmFx_status-panel").hidePopup();
};


reminderfox.core.Send2List= function(address){
	// =========================================================================
	var subject = " "; // Feedback / Support Request ... ";
	var body = "Please describe your Feedback or Support Request" +
	" and set an appropriate 'Subject'." +
	"\n\n___________________________________________________" +
	"\n" + reminderfox.aboutXPI()

	if (!((address) && (address !== ""))) address = reminderfox.consts.SUPPORT

	var mailtoUrl = "mailto:" + address;
	mailtoUrl += "?subject=" + encodeURIComponent(subject);
	mailtoUrl += "&body=" + encodeURIComponent(body);

	reminderfox.util.openURL(mailtoUrl);
}


reminderfox.core.OSinfo = null;

/**
 * Store the prefs 'reminderfox.consts.STORE_FILE' with osTyp
 *
 * new storeFile concept:
 * OS={ostype}:{osstring},OS={ostype}:{osstring},
 * ex:   OS=WINNT:D:\..\reminder.ics,OS=LINUX:/opt/../reminder.ics,OS=DARWIN:/home/user/.../reminder.ics,
 *
 @param   filePath2store:	the 'local' file path
 @return  storeString4thisOS
 */
reminderfox.core.storeFile4OS= function(filePath2store){
	var osTyp = reminderfox.core.opSystemInfo();
	var storeFile;
	var osString = "";

	var storeString4thisOS = reminderfox.core.getStoreFile4OS();

	try {
		var storeString = reminderfox._prefsBranch.getCharPref(reminderfox.consts.STORE_FILE);
	}
	catch (e) {
		var storeString = "";
	}

	if (storeString !== "") {
		//  replace the 'storeString4thisOS' with 'filePath2store' if not ''
		var osArray = storeString.split("OS=");

		if (osArray.length > 0) {
			for (var nOS = 0; nOS < osArray.length; nOS++) {
				var cString = osArray[nOS];

				if (cString.indexOf(osTyp + ":") === 0) {
					// current OS found !! skip it

				}
				else {
					// replace entry with leading "OS="
					if (cString !== "") {
						if (cString.substring(cString.length - 1) != ",") {
							cString += ",";
						}
						osString += "OS=" + cString;
					}
				}
			}
		}
	}

	if (filePath2store !== "") {
		osString += "OS=" + osTyp + ":" + filePath2store + ",";
	}
	reminderfox._prefsBranch.setCharPref(reminderfox.consts.STORE_FILE, osString);

	return storeString4thisOS;
};


reminderfox.core.saveICSfile= function (sFile) {
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//OSswitching    support OS switching	>>> check if directory!!!
	var fs = reminderfox.util.fileCheck (sFile);
	if (fs == -1) {
		alert("&rf.options.isfilelocation.valid;");
		return;
	};
	reminderfox.core.storeFile4OS(document.getElementById("reminderFox-file-location").value);
};


// get the reminderfox.consts.STORE_FILE for current OS
reminderfox.core.getStoreFile4OS= function(){
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	var osTyp = reminderfox.core.opSystemInfo();
	var storeString = "";

	try {
		storeString = reminderfox._prefsBranch.getCharPref(reminderfox.consts.STORE_FILE);
	}
	catch (ex) {
		storeString = reminderfox.core.getReminderStoreFile();
	}

	var fnd = storeString.indexOf("OS=" + osTyp + ":");
	if (fnd > -1) {
		//for the current osTyp we have a 'storeFile', search it
		var osArray = storeString.split("OS=");
		for (var nOS = 0; nOS < osArray.length; nOS++) {
			var cString = osArray[nOS];
			if (cString.substring(cString.length - 1) == ",") {
				cString = cString.substring(0, cString.length - 1);
			}
			fnd = cString.indexOf(osTyp + ":");
			if (fnd === 0) {
				var len = (osTyp + ":").length;
				storeString = cString.substring(len);
			}
		}
	}
	else {
		storeString = "";
	}
	return storeString;
};


/**
 * Call filePicker
 *
 * @param   windowText:       FilePicker Window text
 * @param   filterName:       description of search filter,  eg. 'ICS file'
 * @param   defaultExtension: the extension for 'FilterName' eg. '.ICS'
 * @param   defaultString:    eg. 'reminderfox.ics'  or '*.*'
 * @param   mode:             0='modeOpen' | 1='modeSave' | '2=getFolder'
 * @return  file (object)
 */
reminderfox.core.filePicker= function(windowText, filterName, defaultExtension, defaultString, mode){

	const nsIFilePicker = Components.interfaces.nsIFilePicker;

	var picker = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
	//	picker.appendFilters( 2); // nsIFilePicker.filterAll);
	picker.appendFilter(filterName, "*." + defaultExtension);
	picker.defaultString = defaultString;
	picker.defaultExtension = defaultExtension;
	picker.init(window, windowText, mode /*nsIFilePicker.modeOpen*/);

	var rv = picker.show();
	if ((rv == nsIFilePicker.returnOK) || (rv == nsIFilePicker.returnReplace)) {
		var file = picker.file;
		return file;
	}
	else {
		return null;
	}
}


/**
 * //OSswitching
 *  for each OS a sting is remembered, so OSswitching will bring back
 *  last *.ics file (or just the default)
 *  reminderfox.consts.STORE_FILE  used to store all OS infos
 *  @return {file/path string} if no "user" selected file is set, return 'default/profile' path
 *          else return user defined path, but only if valid, if not valid return default
 */
reminderfox.core.getReminderStoreFile= function(){
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsIFile);

	// 1) setup the default location for "reminderfox.ics"
	var defaultFile = reminderfox.util.ProfD_extend("reminderfox");
	defaultFile.append("reminderfox.ics");
	var defaultFilePath = defaultFile.path;

	// 2) get prefs storeFile.OS   -- saved file from different OSs
	var osTyp = reminderfox.core.opSystemInfo(); // for new
	var osInfo = reminderfox.core.opSystemInfo(); // for old
	var osFilePath = "";
	var storeString = "";

	try {
		storeString = reminderfox._prefsBranch.getCharPref(reminderfox.consts.STORE_FILE);

		var fnd = storeString.indexOf("OS=" + osTyp + ":");
		if (fnd > -1) {
			//for the current osTyp we have a 'storeFile', search it
			var osArray = storeString.split("OS=");
			for (var nOS = 0; nOS < osArray.length; nOS++) {
				var cString = osArray[nOS];
				if (cString.substring(cString.length - 1) == ",") {
					cString = cString.substring(0, cString.length - 1);
				}
				fnd = cString.indexOf(osTyp + ":");
				if (fnd === 0) {
					var len = (osTyp + ":").length;
					storeString = cString.substring(len);
				}
			}
		}
	}
	catch (e) {
	}

	// check which file can be used
	//   1:  if fileinfo is valid, use it
	//   2:  else use OS setting, if not valid, use 'default'
	//   3:  if failed, go with 'defaultFilePath'

	var savefilePathGO = "";
	// 1: check if 'osFilePath' is empty, use 'default'
	if (storeString === "") {
		file.initWithPath(defaultFilePath);
	}
	else {
		try { // 2: use fileinfo is valid
			savefilePathGO = storeString;
			file.initWithPath(savefilePathGO);
			file.exists();
		}
		catch (e) { // 3: if failed, go with 'defaultFilePath'
			savefilePathGO = "";
			file.initWithPath(defaultFilePath);
		}
	}
	return file;
};


//OSswitching   support OS switching -------------
reminderfox.core.opSystemInfo= function(){

	if (reminderfox.core.OSinfo) {
		return reminderfox.core.OSinfo;
	}

	if ("nsIXULRuntime" in Components.interfaces) {
		var osInfo = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime);
		reminderfox.core.OSinfo = osInfo.OS;
		var platform = osInfo.XPCOMABI
	}
	else {
		var osInfo = Components.classes["@mozilla.org/network/protocol;1?name=http"].getService(Components.interfaces.nsIHttpProtocolHandler);
		reminderfox.core.OSinfo = (osInfo.oscpu == "Windows NT 5.1") ? "WINNT" : osInfo.oscpu;
		var platform = osInfo.platform;
	}
	//	WINNT(x86-msvc)		WINNT(Windows)
	//	Linux(x86-gcc3)
	//	Darwin(x86-gcc3)
	var msg =  "OSinfo : " + reminderfox.core.OSinfo + "(" + platform + ")  \n"
		+ navigator.userAgent + " (" + navigator.language + ")";
	//	reminderfox.util.Logger('OSinfo', msg)

	return reminderfox.core.OSinfo;
}


// ***************** reminderfox extraInfo functions <<<<<<<<<<<<<<<<<<<<<<<<<<<<
/**
 * converts reminder.extraInfo string to an array
 *
 * @param {Object} reminder
 * @return   null|stringArray  if reminder.extraInfo is empty, returns null
 */
reminderfox.core.extraInfoArray= function (reminder){
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	return (!reminder.extraInfo) ? null : reminder.extraInfo.split("\\n");
};

/**
 *  reads from extraInfos array using item
 **/
reminderfox.core.extraInfo= function (extraInfos, item, delimiter, multiple){  // if multiple==true --> build array
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	if (!delimiter) delimiter = ":";
	var Item = item.toUpperCase();
	var result="";
	if (extraInfos) {
		if (extraInfos.length > -1) {
			for (var n =0; n < extraInfos.length; n++) {
				if (extraInfos[n].indexOf( Item )  === 0) {
					if (multiple) {result +=  extraInfos[n].substring(extraInfos[n].indexOf( delimiter ) +1 ) + "\n";
					} else {
						result =  extraInfos[n].substring(extraInfos[n].indexOf( delimiter ) +1);
						break;
					}
				}
			}
		}
	}
	return result.replace(/\n+$/,"");
};


/**
 *    iCal/ICS RmFx special:  replaces or add an item in extraInfo array
 */
reminderfox.core.extraInfoReplace= function (extraInfo, itemName, itemValue) {
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	itemName = itemName.toUpperCase();
	var isItem = false;
	if (extraInfo) {
		 if (extraInfo.length > -1) {
			for (var n =0; n < extraInfo.length; n++) {
				if (extraInfo[n].indexOf( itemName )  === 0) {
					isItem = true;
					if  (itemValue === "") {
						extraInfo[n] ="";
						break;
					}
					extraInfo[n] = itemName + ":" + itemValue;
					break
				}
			}
		}
	}
	if (!isItem) {
		extraInfo = extraInfo.push(itemName + ":" + itemValue);
	}
};


reminderfox.core.extraInfoAdd= function (extraInfo, itemName, itemValue, itemAttribute) {
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	itemName = itemName.toUpperCase();
	var isItem = false;
	if (extraInfo) {
		if (extraInfo.length > -1) {

			if (itemName == "ATTENDEE") {
				isItem = true;
				var newItem = addItem(itemName, itemValue, itemAttribute);
				extraInfo.push(newItem);
			} else {
				for (var n =0; n < extraInfo.length; n++) {
					if (extraInfo[n].indexOf(itemName)  === 0) {
						isItem = true;
						if (itemValue === "") {
							extraInfo[n] = "";
							break;
						}
						extraInfo[n] = addItem(itemName, itemValue, itemAttribute);
						break
					}
				}
			}
		}
	}
	if (!isItem) {
		extraInfo.push(addItem(itemName, itemValue, itemAttribute));
	}
		function addItem (itemName, itemValue, itemAttribute) {
			return ((!itemAttribute) ? itemName : (itemName  + ";" + itemAttribute))
					 + ":" + itemValue;
		}
};


/**
 * Remove reminder 'event/todo' from model list and ALSO from numDays-array
 * @param originalReminder {object} reminder to be deleted
 * @param reminders {object} the array from which the reminder will be removed; if null use 'Events'
 */
reminderfox.core.removeReminderFromDataModels= function (originalReminder, reminders){

	if (!reminders) {
		reminders = reminderfox.core.getReminderEvents();
	}
	for (var i = 0; i < reminders.length; i++) {
		if (reminders[i].id == originalReminder.id) {
			reminderfox.core.removeFromArray(reminders, i);
			break;
		}
	}
	reminderfox.core.numDaysModelDelete (originalReminder);  //, namType);
};


/*
 * @since 2.1.4  smartFoxy on main menu bar based on
 * -- todaysEvents / upcomingEvents
 * -- number of todays events
 * -- has an important event
 * Controlled with reminderfox.consts.SMARTFOXY
 */
reminderfox.core.foxyStatus= function(todayEvents, important, upcomingEvents, eventsString) {
//-------------------------------------------------------------
    var aSmartFoxy = +reminderfox.core.getPreferenceValue(reminderfox.consts.SMARTFOXY, reminderfox.consts.SMARTFOXY_DEFAULT);
    reminderfox.core.setPreferenceValue(reminderfox.consts.SMARTFOXY, aSmartFoxy);

     var windowEnumerator = reminderfox.core.getWindowEnumerator();
     while (windowEnumerator.hasMoreElements()) {
         var win = windowEnumerator.getNext();
         var smartFoxyBadge = win.document.getElementById('reminderfox_smartFoxyBadge');
         if (smartFoxyBadge) {
         	smartFoxyBadge.setAttribute('hidden', true);
             if (aSmartFoxy === 0){
                 smartFoxyBadge.setAttribute('hidden', true);
             } else {
                 smartFoxyBadge.setAttribute('hidden', false);
                 smartFoxyBadge.setAttribute('important',important);
                 smartFoxyBadge.setAttribute('importantText',false);
                 smartFoxyBadge.setAttribute('bowtext',false);
             }

             if (aSmartFoxy == 1) {
             	smartFoxyBadge.value = todayEvents.length;
             	if (todayEvents.length == 0 ) {
             		smartFoxyBadge.setAttribute('hidden', true);
             		smartFoxyBadge.setAttribute('bowtext',false);
             	}
             }
             if (aSmartFoxy == 2) smartFoxyBadge.value = todayEvents.length + "/" + upcomingEvents.length;
             if (aSmartFoxy == 3) {
             	if ( eventsString != null && eventsString.length > 0) { 
                	 smartFoxyBadge.value = eventsString;
                	 
                	 smartFoxyBadge.setAttribute('bowtext',true);
                	 smartFoxyBadge.setAttribute('important',false);
                	 smartFoxyBadge.setAttribute('importantText',important);
             	}
             	else {
             		 // if no reminder text, hide the badge  (otherwise it shows an extra "blank/empty" space to the right of the icon)
             		 smartFoxyBadge.value = null;
             		 smartFoxyBadge.setAttribute('hidden', true);
             		 smartFoxyBadge.setAttribute('bowtext',false);
             	}
             }
         }
     }
     
     // smartfoxy statux bow
     var windowEnumerator = reminderfox.core.getWindowEnumerator();
     while (windowEnumerator.hasMoreElements()) {
         var win = windowEnumerator.getNext();
        var smartFoxyImg = win.document.querySelector("#smartfoxy_image_bow");
         if ( smartFoxyImg != null ) { 
	         if ( todayEvents.length > 0 ) { 
	         	smartFoxyImg.setAttribute('status','currentReminder');
	         }
	         else if ( upcomingEvents.length > 0 ) { 
	         	smartFoxyImg.setAttribute('status','upcomingReminder');
	         }
	         else { 
	         	smartFoxyImg.setAttribute('status','noReminders');
	         }
         }

         var smartFoxyBadge = win.document.getElementById('reminderfox_smartFoxyBadge');
         if (smartFoxyBadge) {
         	 smartFoxyBadge.setAttribute('hidden', true);
             if (aSmartFoxy === 0){
                 smartFoxyBadge.setAttribute('hidden', true);
             } else {
                 smartFoxyBadge.setAttribute('hidden', false);
                 smartFoxyBadge.setAttribute('important',important);
                 smartFoxyBadge.setAttribute('importantText',false);
                 smartFoxyBadge.setAttribute('bowtext',false);
             }

             if (aSmartFoxy == 1) {
             	smartFoxyBadge.value = todayEvents.length;
             	if (todayEvents.length == 0 ) {
             		smartFoxyBadge.setAttribute('hidden', true);
             		smartFoxyBadge.setAttribute('bowtext',false);
             	}
             }
             if (aSmartFoxy == 2) smartFoxyBadge.value = todayEvents.length + "/" + upcomingEvents.length;
             if (aSmartFoxy == 3) {
             	if ( eventsString != null && eventsString.length > 0) { 
                	 smartFoxyBadge.value = eventsString;
                	 
                	 smartFoxyBadge.setAttribute('bowtext',true);
                	 smartFoxyBadge.setAttribute('important',false);
                	 smartFoxyBadge.setAttribute('importantText',important);
             	}
             	else {
             		 // if no reminder text, hide the badge  (otherwise it shows an extra "blank/empty" space to the right of the icon)
             		 smartFoxyBadge.value = null;
             		 smartFoxyBadge.setAttribute('hidden', true);
             		 smartFoxyBadge.setAttribute('bowtext',false);
             	}
             }
	     }
	 }
}


reminderfox.core.installButton= function(toolbarId, id, afterId) {
    if (!document.getElementById(id)) {
        var toolbar = document.getElementById(toolbarId);

        // If no afterId is given, then append the item to the toolbar
        var before = null;
        if (afterId) {
            let elem = document.getElementById(afterId);
            if (elem && elem.parentNode == toolbar)
                before = elem.nextElementSibling;
        }
        
        toolbar.insertItem(id, before);
        toolbar.setAttribute("currentset", toolbar.currentSet);
        document.persist(toolbar.id, "currentset");

        if (toolbarId == "addon-bar")
            toolbar.collapsed = false;
    }
}


/**
 *  Switch SmartFoxy to menu bar
 *  @param mode (boolean) switch on/off
 */
reminderfox.core.smartFoxySwitch= function(mode) {
//-------------------------------------------------------------
		var rmFXbutton = document.querySelector("#reminderFox_openButton")
	//	reminderfox.util.Logger('Alert', ".core.smartFoxySwitch  " +"   rmFXbutton: " + rmFXbutton);

/*------
 * TB _____:
0001: rmFXbutton.parentElement.id	$[0] = [string] "tabbar-toolbar"
0001: rmFXbutton.parentElement.id 	$[0] = [string] "mail-bar3"
0001: rmFXbutton.parentElement.id	$[0] = [string] "mail-toolbar-menubar2"
* 
* FX ______:
0001: rmFXbutton.parentElement.id	$[0] = [string] "addon-bar"
0001: rmFXbutton.parentElement.id	$[0] = [string] "nav-bar"
0001: rmFXbutton.parentElement.id	$[0] = [string] "toolbar-menubar"
-----------*/

		var defaultToolBar = ("@mozilla.org/messenger;1" in Components.classes)
			? "tabbar-toolbar" : "nav-bar";

		var smartFoxyBAR = reminderfox.core.getPreferenceValue(reminderfox.consts.SMARTFOXY_BAR, defaultToolBar) 
		var currentBarName = (rmFXbutton && rmFXbutton.parentElement) ? rmFXbutton.parentElement.id : smartFoxyBAR;
		
		// handle for aurora; it has an extra "customization-target" wrapper surrounding buttons; 
		// in this case the toolbar button's *parent's* parent element is the toolbar 
		if ( currentBarName == "nav-bar-customization-target") {
			currentBarName = (rmFXbutton.parentElement && rmFXbutton.parentElement.parentElement) ?
				 rmFXbutton.parentElement.parentElement.id : smartFoxyBAR;
		}
		reminderfox.core.setPreferenceValue(reminderfox.consts.SMARTFOXY_BAR, currentBarName)
		
		// smartfoxy is added to current bar
		if (mode) {
			var currentSet = document.getElementById(currentBarName).currentSet;
			if (currentSet == null) currentSet = document.getElementById(currentBarName).parentNode.currentSet;
			var smartFoxyOnBar = (currentSet.indexOf("reminderFox_openButton") > -1) ;
			if (!smartFoxyOnBar) {
				if (currentSet == "") currentSet = "reminderFox_openButton";
					else {
						var x = reminderfox.core.getPreferenceValue(reminderfox.consts.SMARTFOXY_BAR_POSITION, 0)
						if (x == 0) {
							currentSet += "," + "reminderFox_openButton";
						} else {
							var aCurrentSet = currentSet.split(",");
							reminderfox.core.insertIntoArray (aCurrentSet, "reminderFox_openButton", x);
							currentSet = aCurrentSet.join(",");
						}
					}
				document.getElementById(currentBarName).currentSet = currentSet;
				document.persist(currentBarName,"currentset");
			}
		} else { // remove smartFoxy from currentBar
			var currentSet = document.getElementById(currentBarName).currentSet;
			reminderfox.util.Logger('alert', "currentSet:" + currentSet );
			var smartFoxyOnBar = (currentSet.indexOf("reminderFox_openButton") > -1); 
			
			reminderfox.util.Logger('Alert', "currentset: " + currentSet + " -- " + smartFoxyOnBar );
			
			if (smartFoxyOnBar) {
				var aCurrentSet = currentSet.split(",");
				for (var n=0; n < aCurrentSet.length; n++) {
					if (aCurrentSet[n] == 'reminderFox_openButton') break;
				}
				reminderfox.core.setPreferenceValue(reminderfox.consts.SMARTFOXY_BAR_POSITION, n)

				currentSet = currentSet.replace("reminderFox_openButton","");
				document.getElementById(currentBarName).currentSet = currentSet.replace(",,",",");
				
			}
		}
		document.getElementById(currentBarName).setAttribute("currentset", document.getElementById(currentBarName).currentSet);
		document.persist(currentBarName,"currentset");
}
