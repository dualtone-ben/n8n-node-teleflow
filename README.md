![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-teleflow

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

## Usage

After installation, you'll find the TeleFlow node in the n8n node panel. The node supports the following operations:

- Create, read, update, and delete resources
- Manage accounts and users
- Handle phone numbers and devices
- Configure SIP trunks
- Access billing information
- Generate reports

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

## License

[MIT](LICENSE.md)

## Support

For support, please open an issue in the [GitHub repository](https://github.com/dualtone-ben/n8n-nodes-teleflow).
