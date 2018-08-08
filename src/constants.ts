export const EXTENSION_ID = "karigari.chat";
export const OUTPUT_CHANNEL_NAME = "Slack Chat";
export const APP_INSIGHTS_KEY = "ac30cb4c-9282-4947-8652-4a0ac828f0ce";

export const LiveShareCommands = {
  START: "liveshare.start",
  END: "liveshare.end",
  JOIN: "liveshare.join",
  AUDIO: "liveshare.audio.startOrJoinAudio"
};

// Is there a way to get this URL from the extension?
export const LIVE_SHARE_BASE_URL = `insiders.liveshare.vsengsaas.visualstudio.com`;
export const TRAVIS_BASE_URL = `travis-ci.org`;

export const VSCodeCommands = {
  OPEN: "vscode.open"
};

export const SelfCommands = {
  OPEN: "extension.chat.openSlackPanel",
  CHANGE: "extension.chat.changeChannel",
  SHARE_LOCATION: "extension.chat.shareLocation"
};

export const SLASH_COMMANDS = {
  live: {
    share: {
      action: LiveShareCommands.START,
      options: { suppressNotification: true }
    },
    end: {
      action: LiveShareCommands.END,
      options: {}
    },
    audio: {
      action: LiveShareCommands.AUDIO,
      options: {}
    }
  }
};

// Reverse commands are acted on when received from Slack
export const REVERSE_SLASH_COMMANDS = {
  live: {
    request: {}
  }
};
