import GitHubCalendar from 'react-github-calendar'
import { useTheme } from "@/components/ThemeProvider";
import { gitHubUsername } from '@/assets/Data';

export default function GithubCal() {
  const { theme } = useTheme()

  const colorScheme = theme === 'dark' ? 'dark' : 'light'

  return (
    <div className="my-10 w-full">
      <h3 className="text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        Commits Chart
      </h3>
      <div className="mt-5 flex items-center justify-center">
        <GitHubCalendar
          colorScheme={colorScheme}
          username={gitHubUsername}
          showWeekdayLabels={true}
        />
      </div>
    </div>
  )
}