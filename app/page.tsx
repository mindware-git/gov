export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
            정부와 오픈소스의
            <br />
            선순환을 만들다
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            정부 과제에 오픈소스 프로젝트를 연결하여, 더 높은 품질의
            소프트웨어를 제공하고, 개발자에게는 실제 필드 경험을 통해 성장의
            기회를 제공합니다.
          </p>

          <div className="mt-8 w-full text-left">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
              우리의 비전: 투명하고 효율적인 협력
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              정부 기관은 신뢰할 수 있는 오픈소스 솔루션을 통해 예산을
              효율적으로 사용하고 기술적 독립성을 확보할 수 있습니다. 오픈소스
              커뮤니티는 실제 공공 프로젝트에 기여하며 귀중한 경험을 쌓고,
              자신의 코드가 사회에 기여하는 것을 직접 확인할 수 있습니다. 우리는
              이 두 영역을 잇는 다리가 되어 기술 혁신을 가속화합니다.
            </p>
          </div>

          <div className="mt-4 w-full text-left">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
              우리의 모델: 지속 가능한 생태계
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              저희는 Collabora, Canonical과 같이 전문적인 컨설팅과 기술 지원을
              통해 수익을 창출합니다. 이러한 비즈니스 모델은 우리가 오픈소스
              프로젝트를 지속적으로 지원하고, 커뮤니티와 함께 성장할 수 있는
              기반이 됩니다. 이익 추구를 넘어, 오픈소스의 가치를 확산시키고
              건강한 생태계를 만드는 것이 우리의 궁극적인 목표입니다.
            </p>
          </div>
        </div>
        <div />
      </main>
    </div>
  );
}
