import AirQualityDashboard from "./air-quality-dashboard";
import AirQualityForecast from "./air-quality-forecast";

export default function Dashboard (){
    return(
        <div>
        <AirQualityDashboard></AirQualityDashboard>
        <AirQualityForecast></AirQualityForecast>
        </div>
    )
}