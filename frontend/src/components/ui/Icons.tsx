export function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g fill='none'>
        <path
          fill='currentColor'
          fillOpacity='0.16'
          d='M15 22h3.6a2.4 2.4 0 0 0 2.4-2.412V8.332c0-.382-.18-.734-.48-.965L12.7 2.24a1.195 1.195 0 0 0-1.44 0L3.48 7.367c-.3.231-.48.583-.48.965v11.256A2.4 2.4 0 0 0 5.4 22H9v-9.2c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8z'
        />
        <path
          stroke='currentColor'
          strokeMiterlimit='10'
          strokeWidth='1.5'
          d='M18.6 22H5.4A2.4 2.4 0 0 1 3 19.588V8.332c0-.382.18-.734.48-.965l7.78-5.126a1.195 1.195 0 0 1 1.44 0l7.82 5.126c.3.231.48.583.48.965v11.256A2.4 2.4 0 0 1 18.6 22Z'
        />
        <path
          stroke='currentColor'
          strokeMiterlimit='10'
          strokeWidth='1.5'
          d='M9.8 12h4.4c.44 0 .8.36.8.8V22H9v-9.2c0-.44.36-.8.8-.8Z'
        />
      </g>
    </svg>
  );
}

export function ShoppingCartIcon(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='8' cy='21' r='1' />
      <circle cx='19' cy='21' r='1' />
      <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
    </svg>
  );
}

export function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m7.5 4.27 9 5.15' />
      <path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
      <path d='m3.3 7 8.7 5 8.7-5' />
      <path d='M12 22V12' />
    </svg>
  );
}

export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
    >
      <path
        fill='currentColor'
        d='M10 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6M6 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4.51 7.326a.78.78 0 0 1-.358-.442a3 3 0 0 1 4.308-3.516a6.48 6.48 0 0 0-1.905 3.959q-.034.335.025.654a5 5 0 0 1-2.07-.655m14.95.654a5 5 0 0 0 2.07-.654a.78.78 0 0 0 .357-.442a3 3 0 0 0-4.308-3.517a6.48 6.48 0 0 1 1.907 3.96a2.3 2.3 0 0 1-.026.654M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5.304 16.19a.84.84 0 0 1-.277-.71a5 5 0 0 1 9.947 0a.84.84 0 0 1-.277.71A6.98 6.98 0 0 1 10 18a6.97 6.97 0 0 1-4.696-1.81'
      />
    </svg>
  );
}

export function LineChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='256'
      height='256'
      viewBox='0 0 256 256'
    >
      <g fill='currentColor'>
        <path
          d='M224 64v144H32V48h176a16 16 0 0 1 16 16'
          opacity='0.2'
        />
        <path d='M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v94.37L90.73 98a8 8 0 0 1 10.07-.38l58.81 44.11L218.73 90a8 8 0 1 1 10.54 12l-64 56a8 8 0 0 1-10.07.38l-58.81-44.09L40 163.63V200h184a8 8 0 0 1 8 8' />
      </g>
    </svg>
  );
}

export function LogOutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M16 2h-1c-2.829 0-4.242 0-5.121.879S9 5.172 9 8v8c0 2.829 0 4.243.879 5.122c.878.878 2.292.878 5.119.878H16c2.828 0 4.242 0 5.121-.879C22 20.243 22 18.828 22 16V8c0-2.828 0-4.243-.879-5.121S18.828 2 16 2'
        opacity='0.5'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M15.75 12a.75.75 0 0 0-.75-.75H4.027l1.961-1.68a.75.75 0 1 0-.976-1.14l-3.5 3a.75.75 0 0 0 0 1.14l3.5 3a.75.75 0 1 0 .976-1.14l-1.96-1.68H15a.75.75 0 0 0 .75-.75'
        clipRule='evenodd'
      />
    </svg>
  );
}

export function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

export function GearIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='25'
      viewBox='0 0 24 25'
    >
      <path
        fill='currentColor'
        d='M4.253 5.397a1.492 1.492 0 0 0 2.23-1.288h1.5a1.492 1.492 0 0 0 2.231 1.288l.75 1.298c.417-.233.916-.387 1.424-.478q-.046-.135-.12-.264l-.759-1.313a1.49 1.49 0 0 0-2.025-.553A1.49 1.49 0 0 0 7.992 2.61H6.476c-.82 0-1.485.66-1.492 1.478a1.49 1.49 0 0 0-2.026.553L2.2 5.953c-.41.71-.17 1.616.534 2.031a1.49 1.49 0 0 0-.534 2.031l.758 1.313c.41.71 1.314.955 2.026.553c.006.618.388 1.147.928 1.368c-.003-.571.14-1.15.447-1.68l.068-.118a1.494 1.494 0 0 0-2.174-.88l-.75-1.299c.985-.576.985-2 0-2.576z'
      />
      <path
        fill='currentColor'
        d='M7.234 9.484a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M11.64 15.11a3.065 3.065 0 1 1 6.13 0a3.065 3.065 0 0 1-6.13 0m3.066-1.564a1.565 1.565 0 1 0 0 3.13a1.565 1.565 0 0 0 0-3.13'
        clipRule='evenodd'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M7.658 17.903a1.833 1.833 0 0 1 .671-2.505a.333.333 0 0 0 0-.576a1.833 1.833 0 0 1-.67-2.504l1.106-1.916a1.833 1.833 0 0 1 2.503-.67a.332.332 0 0 0 .499-.288c0-1.012.82-1.833 1.832-1.833h2.213c1.013 0 1.833.821 1.833 1.833c0 .256.277.416.498.288a1.83 1.83 0 0 1 2.503.67l1.107 1.918a1.83 1.83 0 0 1-.67 2.502a.332.332 0 0 0 0 .576a1.833 1.833 0 0 1 .67 2.503l-1.105 1.916a1.833 1.833 0 0 1-2.504.671a.333.333 0 0 0-.5.288c0 1.013-.82 1.833-1.832 1.833H13.6a1.833 1.833 0 0 1-1.833-1.832a.333.333 0 0 0-.5-.288a1.833 1.833 0 0 1-2.503-.671zm1.421-1.206a.333.333 0 0 0-.122.456l1.106 1.915c.092.16.295.214.455.122c1.221-.705 2.749.176 2.749 1.587c0 .183.149.332.333.332h2.212a.333.333 0 0 0 .333-.333c0-1.41 1.527-2.292 2.749-1.587c.16.092.363.037.455-.122l1.106-1.916a.333.333 0 0 0-.122-.454c-1.221-.705-1.222-2.468 0-3.174a.33.33 0 0 0 .121-.453l-1.107-1.917a.33.33 0 0 0-.454-.122c-1.221.706-2.748-.177-2.748-1.587a.333.333 0 0 0-.333-.333H13.6a.33.33 0 0 0-.332.333c0 1.41-1.527 2.292-2.749 1.586a.333.333 0 0 0-.454.122l-1.106 1.916a.333.333 0 0 0 .122.455c1.222.705 1.22 2.47 0 3.174'
        clipRule='evenodd'
      />
    </svg>
  );
}

export function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g fill='none'>
        <path
          fill='currentColor'
          fillOpacity='0.25'
          d='M4 7.5c0-.236 0-.354.073-.427S4.264 7 4.5 7h15c.236 0 .354 0 .427.073S20 7.264 20 7.5v.252c0 .09 0 .136-.014.176a.25.25 0 0 1-.057.092c-.03.03-.07.05-.151.091c-.651.325-.976.488-1.213.732a2 2 0 0 0-.453.733C18 9.896 18 10.26 18 10.988V16c0 1.886 0 2.828-.586 3.414S15.886 20 14 20h-4c-1.886 0-2.828 0-3.414-.586S6 17.886 6 16v-5.012c0-.728 0-1.092-.112-1.412a2 2 0 0 0-.453-.733c-.237-.244-.562-.407-1.213-.732a.6.6 0 0 1-.151-.091a.25.25 0 0 1-.057-.092C4 7.888 4 7.842 4 7.752z'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          d='M10.068 4.37c.114-.106.365-.2.715-.267A6.7 6.7 0 0 1 12 4c.44 0 .868.036 1.217.103s.6.161.715.268'
          strokeWidth='1'
        />
        <rect
          width='1'
          height='6'
          x='14'
          y='11'
          fill='currentColor'
          rx='.5'
        />
        <rect
          width='1'
          height='6'
          x='9'
          y='11'
          fill='currentColor'
          rx='.5'
        />
      </g>
    </svg>
  );
}

export function EditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        fillOpacity='0.25'
        d='m13.5 5.5l-7.047 7.047c-.225.225-.337.337-.408.476c-.072.139-.098.296-.15.61l-.78 4.677c-.052.314-.079.472.012.563s.249.064.563.012l4.678-.78c.313-.052.47-.078.61-.15c.138-.071.25-.183.475-.408L18.5 10.5c1.017-1.017 1.526-1.526 1.638-2.137c.045-.24.045-.486 0-.726c-.112-.611-.62-1.12-1.638-2.137s-1.526-1.526-2.137-1.638a2 2 0 0 0-.726 0c-.611.112-1.12.62-2.137 1.638'
      />
      <path
        fill='currentColor'
        d='m12.293 6.707l-5.84 5.84c-.225.225-.337.337-.408.476c-.072.139-.098.296-.15.61l-.78 4.677c-.052.314-.079.472.012.563s.249.064.563.012l4.678-.78c.313-.052.47-.078.61-.15c.138-.071.25-.183.475-.408l5.84-5.84c.333-.333.5-.5.5-.707s-.167-.374-.5-.707l-3.586-3.586c-.333-.333-.5-.5-.707-.5s-.374.167-.707.5'
      />
    </svg>
  );
}

export function ViewIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        fillOpacity='0.25'
        d='M20.188 10.934c.388.472.582.707.582 1.066s-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18s-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066s.194-.594.582-1.066C5.232 9.21 8.364 6 12 6s6.768 3.21 8.188 4.934'
      />
      <circle cx='12' cy='12' r='3' fill='currentColor' />
    </svg>
  );
}

export function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g fill='none'>
        <circle
          cx='12'
          cy='12'
          r='9'
          fill='currentColor'
          fillOpacity='0.25'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeWidth='1.2'
          d='m9 9l6 6m0-6l-6 6'
        />
      </g>
    </svg>
  );
}

export function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M6.6 11.397c0-2.726 0-4.089.843-4.936c.844-.847 2.201-.847 4.917-.847h2.88c2.715 0 4.073 0 4.916.847c.844.847.844 2.21.844 4.936v4.82c0 2.726 0 4.089-.844 4.936c-.843.847-2.201.847-4.916.847h-2.88c-2.716 0-4.073 0-4.917-.847s-.843-2.21-.843-4.936z'
      />
      <path
        fill='currentColor'
        d='M4.172 3.172C3 4.343 3 6.229 3 10v2c0 3.771 0 5.657 1.172 6.828c.617.618 1.433.91 2.62 1.048c-.192-.84-.192-1.996-.192-3.66v-4.819c0-2.726 0-4.089.843-4.936c.844-.847 2.201-.847 4.917-.847h2.88c1.652 0 2.8 0 3.638.19c-.138-1.193-.43-2.012-1.05-2.632C16.657 2 14.771 2 11 2S5.343 2 4.172 3.172'
        opacity='0.5'
      />
    </svg>
  );
}

export function DotsHorizontalIcon(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0'
      />
    </svg>
  );
}
