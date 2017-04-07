const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const low = require('lowdb');
const db = low('db.json')

db.defaults({
    config: {},
    window: {
        fullscreen: undefined,
        size: [800, 600]
    }
}).write()

let windowsNumber = 0

process.on('createNewWindow', () => {
    let window = new BrowserWindow({
        width: db.get('window.size[0]').value(),
        height: db.get('window.size[1]').value(),
        fullscreen: db.get('window.fullscreen').value(),
        show: false,
        frame: true
    })
    windowsNumber++
    window.loadURL(`file://${__dirname}/public/index.html`)
    window.on('page-title-updated', () => window.show())
    window.on('closed', () => {
        windowsNumber--
        window = null
    })
    window.on('resize', () => db.set('window.size', window.getSize()).write())
    window.on('enter-full-screen', () => db.set('window.fullscreen', true).write())
    window.on('leave-full-screen', () => db.set('window.fullscreen', undefined).write())
})

app.on('ready', () => {
    process.emit('createNewWindow')
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (windowsNumber === 0) {
        process.emit('createNewWindow')
    }
})


app.on('will-quit', () => {
    //globalShortcut.unregisterAll();
});

//┌─┐┬┌┬┐┌─┐┌┐┌ ─┐┌─┐┌─┐┌─┐
//└─┐│││││ ││││ ─┤│ ││ ││ │
//└─┘┴┴ ┴└─┘┘└┘ ─┘└─┘└─┘└─┘

/*
                                               *@@@@@@@@@@@@@@@@@@@@@@@@*
                                       #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#
                                 !@@@@@@@@@@@@@@@!.                  .!@@@@@@@@@@@@@@@!
                             @@@@@@@@@@@@                                      @@@@@@@@@@@@
                         @@@@@@@@@@.                                                .@@@@@@@@@@
                      @@@@@@@@@                                                          @@@@@@@@@
                   @@@@@@@@.                                                                .@@@@@@@@
                .@@@@@@@                                                                        @@@@@@@.
              !@@@@@@!                                                                            !@@@@@@!
            !@@@@@@                                                                                  @@@@@@!
          .@@@@@@                                       :$$$$$$$                                       @@@@@@.
         @@@@@@                                        $$$    $$$                                        @@@@@@
       .@@@@@@                                         !$$!   $$$$$                                       @@@@@@.
      @@@@@@                                             *$$$$$   $$$$                                      @@@@@@
     @@@@@@                                                         $$$-                                     @@@@@@
    @@@@@@                                                            $$$                                     @@@@@@
   @@@@@@                          *$$$$$$$$$$$$$$$!             :$$$$ $$$ $$$$$$$$$*                          @@@@@@
  #@@@@@                        $$$$,                     !$$$$$$$,     $$$        .$$$$                        @@@@@#
 .@@@@@                       $$$                    *$$$$$-             $$$           $$$                       @@@@@.
 @@@@@                       *$$                 $$$$$                   ;$$            $$$                       @@@@@
.@@@@@                       $$$             !$$$$                        $$$           $$$                       @@@@@.
@@@@@*                       !$$          =$$$:                           ;$$           $$$                       *@@@@@
@@@@@                         $$$      :$$$:                               $$,         $$$                         @@@@@
@@@@@                          $$$   $$$$                                  $$$        $$$                          @@@@@
@@@@@                              $$$-                  $$$$$$            $$$      ;$$$                           @@@@@
@@@@@                            $$$,                    $$$$$$            $$$    -$$$                             @@@@@
@@@@@                           $$$ ,$$$                   ;;              $$$    -$                               @@@@@
@@@@@-                        .$$,    ;$$$.                                $$;                                    -@@@@@
.@@@@@                        $$;        $$$$                             ,$$                                     @@@@@.
.@@@@@                       $$$            $$$$!                         $$$                                     @@@@@.
 .@@@@@                     .$$$$$$            ~$$$$~                     $$-        $$$$$$,                     @@@@@.
 .#@@@@@                   $$$    $$$              ;$$$$$                $$$       !$$.   $$$                   @@@@@#.
  .@@@@@#                  $$$    $$$         $.        $$$$$$$.         $$        !$$    $$$                  #@@@@@.
   .@@@@@$                  ~$$$$$$           $$$             =$$$$$$$$$$=!!!!=$$$$$$$$$$$$=                  $@@@@@.
    .@@@@@@                                    $$$                     .-;$$$$;-                             @@@@@@.
     .@@@@@@                                    $$$                  $$$                                    @@@@@@.
      .-@@@@@-                                    $$$              $$$!                                   -@@@@@-.
        .@@@@@@                                     $$$$        =$$$~                                    @@@@@@.
         .,@@@@@@                                      $$$$$$$$$$~                                     @@@@@@,.
           .*@@@@@@                                                                                  @@@@@@*.
             .!@@@@@@                                                                              @@@@@@!.
               .,@@@@@@@                                                                        @@@@@@@,.
                 .,@@@@@@@@                                                                  @@@@@@@@,.
                    .,@@@@@@@@:                                                          :@@@@@@@@,.
                       .,@@@@@@@@@#                                                  #@@@@@@@@@,.
                          .,,@@@@@@@@@@@-                                      -@@@@@@@@@@@,,.
                              ..,*@@@@@@@@@@@@@@!                      !@@@@@@@@@@@@@@*,..
                                  ...,,#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#,,...
                                         ..,,,,;@@@@@@@@@@@@@@@@@@@@@@@@;,,,,..
 */
