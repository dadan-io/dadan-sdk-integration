# Dadan SDK Integration

`dadan-sdk-integration` is an SDK for integrating Dadan features into React applications. It allows you to add video recording and file selection functionality directly into your React components, providing a seamless user experience for integrating video-based communication and sharing.

## Installation

Install the package using npm:

```bash
npm install path_to_your_package/dadan-sdk-integration-1.0.0.tgz
```


## Minimum React Version

This package requires **React 17.0.0 or higher**.
## Usage

The main component exported by this SDK is `Dadan`. Here's an example of how to use it in a simple React app:

### Props

| Prop Name     | Type          | Default | Description                                                    |
|---------------|---------------|---------|----------------------------------------------------------------|
| `choose`      | `function`    | `null`  | Function to handle selected files or URLs from the file picker.|
| `record`      | `function`    | `null`  | Function to handle recorded video data.                        |
| `dir`         | `string`      | `ltr`   | Sets the direction of the component (`ltr` or `rtl`).          |                 |
| `zIndex`      | `number`      | `1000`  | Sets the z-index of the component.                             |

### Basic Example

```jsx
import React from "react";
import { Dadan } from "dadan-sdk-integration";

function App() {
    return (
        <div>
            <Dadan 
                dir="ltr"
                choose={(data) => console.log("Selected Data:", data)}
                record={(data) => console.log("Recorded Data:", data)}
                quickRecord={true}
                zIndex={999}
            />
        </div>
    );
}

export default App;
```

### Explanation

1. Import the `Dadan` component from the `dadan-sdk-integration` package.
2. Include the `Dadan` component inside your JSX.
3. Use the `choose` and `record` props to handle file selection and video recording, respectively, logging the data to the console.