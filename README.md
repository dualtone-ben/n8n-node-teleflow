# n8n-node-teleflow

This is an n8n community node for integrating with the TeleFlow API. It allows you to interact with various TeleFlow resources like accounts, devices, phone numbers, and more directly from your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[TeleFlow](https://teleflow.app/) is a platform that provides telecommunications services and APIs.

## Installation

Follow these steps to install this node:

### Local Installation

1. Go to the n8n community nodes directory:
   ```
   cd ~/.n8n/custom
   ```

2. Clone this repository:
   ```
   git clone https://github.com/yourusername/n8n-node-teleflow.git
   ```

3. Build the code:
   ```
   cd n8n-node-teleflow
   npm install
   npm run build
   ```

4. Restart n8n

### Using npm

```
npm install n8n-node-teleflow
```

## Features

This node provides operations for the following TeleFlow resources:

- Account
- Device
- Phone Number
- SIP Trunk
- User
- Tenant
- And many more...

### Operations

For each resource, the following operations are available:

- Create
- Get
- Get Many
- Update
- Delete

## Credentials

To use this node, you need to have a TeleFlow account and obtain an API key. 

1. In the n8n workflow editor, click on "Credentials" in the left panel
2. Click on "Create New"
3. Search for "TeleFlow API"
4. Enter your API key, base URL, and optional tenant ID
5. Save the credentials

## Usage Examples

### Create a new account

1. Add the TeleFlow node to your workflow
2. Select "Account" as the resource
3. Select "Create" as the operation
4. Enter the required information
5. Run the workflow

### Get a device by ID

1. Add the TeleFlow node to your workflow
2. Select "Device" as the resource
3. Select "Get" as the operation
4. Enter the device ID
5. Run the workflow

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [TeleFlow API documentation](https://docs.teleflow.app)

## License

[MIT](LICENSE.md)
