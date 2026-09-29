> Open this [https://cepels-code.github.io/snitcher-to-my-radiocomunication/](https://cepels-code.github.io/snitcher-to-my-radiocomunication/)
>
> And link to my communication [https://cepels-code.github.io/RADIOCOMUNICATION_BBC_MICROBIT/]

# Radio Communication - Receiver

A dedicated radio receiver project for BBC micro:bit (compatible with both V1 and V2) using MakeCode TypeScript.

## How It Works

This project listens for incoming radio transmissions on **Group 1**:
* **Displays Letters/Strings:** Automatically scrolls or displays received text on the 5x5 LED matrix.
* **Clears Screen:** Clears the display when receiving the string `"CLEAR"`.
* **Startup Check:** Displays a checkmark (`✓`) on power-up to confirm it is active and ready to receive.
* **No Transmitter Actions:** All button and logo inputs are disabled to ensure pure receiver operation.
