# n8n-nodes-teleflow

![TeleFlow Logo](nodes/TeleFlow/teleflow.svg)

This is an n8n community node for integrating with the TeleFlow API. It provides nodes for managing telephony resources, VoIP services, and other TeleFlow platform features.

## Features

- Manage TeleFlow accounts and users
- Handle phone numbers and devices
- Configure SIP trunks and carriers
- Manage voice mail and call recordings
- Access billing and reporting features
- And much more!

## Installation

Follow these steps to install the node:

1. Go to your n8n root directory
2. Run the following command:
```bash
npm install n8n-nodes-teleflow
```
3. Restart n8n

## Prerequisites

- n8n instance
- Node.js version 20.15 or higher
- TeleFlow API credentials

## Authentication

To use this node, you'll need to set up your TeleFlow API credentials. You can get these from your TeleFlow account dashboard.

### Required Credentials

1. **API Key**: Your TeleFlow API key
   - This is used as a Bearer token for authentication
   - Can be found in your TeleFlow account settings

2. **Base URL**: The base URL for the TeleFlow API
   - Default: `https://api.teleflow.com/v1`
   - Can be customized for different environments

3. **Tenant ID** (Optional): For multi-tenant environments
   - Only required if you're working with multiple tenants
   - Can be found in your TeleFlow account settings

## Usage

After installation, you'll find the TeleFlow node in the n8n node panel. The node supports the following operations:

### Basic Operations
- Create new resources
- Read/Get resource details
- Update existing resources
- Delete resources
- List multiple resources

### Resource Management
- **Accounts**: Create and manage TeleFlow accounts
- **Users**: Handle user creation and management
- **Devices**: Configure and manage telephony devices
- **Phone Numbers**: Manage phone number assignments
- **SIP Trunks**: Configure VoIP connections
- **Billing**: Access billing information and reports

### Example Workflows
1. **Account Creation**
   - Create a new TeleFlow account
   - Assign phone numbers
   - Configure SIP trunks
   - Set up users

2. **Call Management**
   - Monitor call records
   - Handle voice mail
   - Process call transcriptions

3. **Billing Automation**
   - Generate billing reports
   - Process billing entries
   - Monitor usage

## Resources

The node supports the following TeleFlow resources:

- Account
- Account Audit
- Billing Entry
- Call Detail Record
- Carrier
- Device
- Device Template
- Email Template
- Feature Code
- File
- Flow
- Flow Template
- LCR
- Mobile SIM
- Number Port
- Phone Number
- Provision
- Report
- Reseller
- SIP Trunk
- Tariff
- Tariff Code
- Tariff Profile
- Tenant
- Tenant Audit
- Transcription
- User
- Voice
- Voice Mail Message

## Development

To contribute to this project:

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Build the project:
```bash
npm run build
```
4. Run tests:
```bash
npm test
```

### Local Development
For local development and testing:
1. Link the package:
```bash
npm link
```
2. In your n8n installation:
```bash
npm link n8n-nodes-teleflow
```
3. Restart n8n

## Troubleshooting

Common issues and solutions:

1. **Authentication Errors**
   - Verify your API key is correct
   - Check if the API key has proper permissions
   - Ensure the base URL is correct

2. **Connection Issues**
   - Verify network connectivity
   - Check if the TeleFlow API is accessible
   - Validate tenant ID if using multi-tenant setup

3. **Resource Not Found**
   - Verify resource IDs
   - Check if you have proper permissions
   - Ensure the resource exists in your tenant

## License

[MIT](LICENSE.md)

## Support

For support, please open an issue in the [GitHub repository](https://github.com/dualtone-ben/n8n-nodes-teleflow).
