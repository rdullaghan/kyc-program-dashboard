# KYC Program Dashboard

A comprehensive dashboard for tracking Know Your Customer (KYC) compliance metrics and performance indicators.

## 📊 Current Metrics (June 2026)

- **Total Volume (May)**: 329,182 alerts (↑ 32% vs prior month)
- **Dispositioning Rate**: 17.8%
- **DQSLA Rate**: 0.29%
- **SLA Compliance**: 99.7%
- **QC Pass Rate**: 93.6%
- **Total Headcount**: 410 (BPO 390 | Internal 18)

## 🎯 Features

- **Real-time Metrics**: Key performance indicators with trend analysis
- **Interactive Charts**: Monthly volume trends, compliance rates, and headcount tracking
- **Data Sources**: Comprehensive table of all data sources and refresh frequencies
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Executive Ready**: Professional layout suitable for leadership presentations

## 📈 Charts Included

1. **Monthly Alert Volume**: Bar chart showing alert volumes by month
2. **DL/Subscription Rate Trend**: Line chart tracking dispositioning rates
3. **DQSLA Rate Trend**: Monitoring data quality SLA performance
4. **Headcount Ramp**: Team growth and capacity planning
5. **SLA Compliance Trend**: Service level agreement performance
6. **QC Pass Rate Trend**: Quality control metrics over time

## 🔄 Data Sources

| Data Point | Source | Refresh |
|------------|--------|---------|
| Alert Volumes & Dispositioning | Snowflake | Daily |
| Denylist Rate | Snowflake | Daily |
| SLA Performance | Snowflake | Daily |
| Quality Control Scores | Snowflake | Daily |
| BPO Headcount | Google Drive | Weekly |
| Internal Team | Static | Manual |

## 🚀 Quick Start

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. No server required - runs entirely client-side

### GitHub Pages Deployment
1. Enable GitHub Pages in repository settings
2. Set source to main branch
3. Dashboard will be available at: `https://[username].github.io/kyc-program-dashboard`

## 📱 Usage

### Navigation
- **Who We Are**: Program overview and team information
- **Program Overview**: Main dashboard with current metrics and charts
- **Deep Dive**: Detailed analysis and breakdowns
- **Process**: KYC procedures and controls

### Updating Data
1. Edit the data arrays in `script.js`
2. Update metric values in `index.html`
3. Commit and push changes
4. Dashboard updates automatically

## 🎨 Customization

### Colors
- Primary: `#1da1f2` (Blue)
- Success: `#17bf63` (Green)
- Warning: `#ff9500` (Orange)
- Error: `#e0245e` (Red)
- Purple: `#794bc4`

### Layout
- Responsive grid system
- Mobile-first design
- Professional typography
- Clean, minimal interface

## 📊 Data Updates

### Monthly Process
1. Extract latest figures from Tableau Alert Drilldown Dashboard
2. Update `TOTAL VOLUME (MAY)` metric in HTML
3. Update chart data in JavaScript
4. Verify percentage calculations
5. Commit changes with descriptive message

### Automated Updates
- Dashboard refreshes daily from Snowflake sources
- BPO headcount updated weekly from Google Drive
- Manual updates for internal team changes

## 🔧 Technical Details

- **Framework**: Vanilla HTML/CSS/JavaScript
- **Charts**: Chart.js library
- **Styling**: CSS Grid and Flexbox
- **Fonts**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- **Icons**: Unicode symbols and CSS shapes

## 📋 Maintenance

### Regular Tasks
- [ ] Update monthly volume figures
- [ ] Verify data source connections
- [ ] Check chart accuracy
- [ ] Update headcount numbers
- [ ] Review percentage calculations

### Quality Checks
- [ ] Cross-reference with Tableau dashboard
- [ ] Validate Snowflake query results
- [ ] Confirm exclusion of bulk closed alerts
- [ ] Test responsive design
- [ ] Verify all charts load correctly

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request
5. Review and merge

## 📞 Support

For questions or issues:
- **Primary Contact**: r.dullaghan
- **Team**: KYC Compliance Operations
- **Data Issues**: Check Snowflake connections
- **Chart Problems**: Verify Chart.js CDN

## 📝 Version History

- **v1.0** (June 2026): Initial dashboard with corrected Tableau data
- Excludes bulk closed alerts from all calculations
- Responsive design implementation
- Interactive chart functionality

---

*Last updated: June 7, 2026 at 4:18 PM PT*