
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'fittings', name: 'Fittings', icon: 'plumbing' },
  { id: 'valves', name: 'Valves', icon: 'valve' },
  { id: 'flanges', name: 'Flanges', icon: 'circle' },
  { id: 'accessories', name: 'Accessories', icon: 'construction' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    sku: 'BE-90-01',
    name: '90° Elbow',
    description: 'Threaded female connection',
    category: 'fittings',
    diameter: '1/2" - 1"',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4eSC7OwABnmlZwV4yLIeuJV2sh86eYnhWf_dbVKDdwJrGRASba0Oog9MNbdExxHPvzxQnf7KIdlD8J6elp4j7_tg-vyo-tCOLWEmR4SYhsd2T5ixsKYTiIzxD9EqKlZVumb8-d0pgk-8OYwc8zx_fxWAdyI27HaQOPjWEmbeCSL2BX3vpsa86XNQybakzpiEdePvb7raikRUJZLhI7tcEUo1KGfJWvrPqnh_yvpReweZyF5UfTWJHSWBG9AwpF1NIYsZ6bzn8WA'
  },
  {
    id: '2',
    sku: 'BU-3P-02',
    name: 'Bronze Union',
    description: '3-piece construction',
    category: 'fittings',
    diameter: '1 1/4" - 2"',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw56E7O7tXJh-SZ3Vp5fHhcEnvSW0CGLUbCi3O32z6vvi-qXQiJSm0MBQtFenodwMwTFvfg5Wo4fUNem-3_FN9GzFXu-YeLbOb5LepSy1NbEyOu6KEYihqsiZlaN8DQvmDWou1gAIbsN7DFK6aHhDEPqmasNPAJtuPJNRfAs3zDdTHbE57CsEtEkMMxWnKI5Ojucmtk3r8YOGrW3zi9x-WETVSU2Bmu-5rZL9QE1kmzLvCiZqyozdrW7Et2ApNbkFia0wz-M35kw'
  },
  {
    id: '3',
    sku: 'HN-MN-03',
    name: 'Hex Nipple',
    description: 'Standard male NPT threads',
    category: 'fittings',
    diameter: '1/2" - 1"',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Ut_l0u9cSnMbLc17VV8ZwNVxCZbRRZmm0K5DnS0R5Vm2xXrKWryKwn2Wy4WQEB3UaOXcPtDoDH5cv6vP8C-gdwcLGARLculQVBEhoK8J95IkYbX7z4xukyjmCmdNHaQljDF2w2ohLu8GHWmU04D6z80tbeg3HNbLSfmkIju3m-WIZCtX9A5_ThKgo1ccoFvHL-5Q8tW_WczOGSqvYFzcw81U14zqBRDFGVj1yWBBJSFJ4IzbzJVe7qUi2PHxoJlbBABm-wx5dQ'
  },
  {
    id: '4',
    sku: 'FA-SW-04',
    name: 'Female Adapter',
    description: 'Sweat to female pipe thread',
    category: 'fittings',
    diameter: '2" +',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQXqdF3ISM-ZjRSebIWYrZ-r7xq-345LjmTW7XUKvIUsvuAMmDG9sQEXlG3ICdLuez5LQK74umXmSVNKFTW5UUyN73tQwHS1zn_43AtfA3YDTvsPbX4sOi1hQ8qpOfwmbjCXR-9zpUD5eoqy9ih6lQycuM6VahZ9bRI4dlRnmUhM9ERNWtaac6-LQD61cTyJEcON7T18yoD_R2uWGndWulkKSFda2C8iY0wXumpQxKzwlpQ4zZBzOiuZ1neY15XjX31J40rJxk_w'
  },
  {
    id: '5',
    sku: 'BV-FP-05',
    name: 'Ball Valve',
    description: 'Full port bronze ball valve',
    category: 'valves',
    diameter: '1 1/4" - 2"',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQRJyquaa_5v0SQhkSiqvtJ7Z5h-qfRMZT6o-qK4Da7rw1zBe8C1JKgwxR5oIM1ClazSFXB-RdG06begYq0nUdVBE5g3LbHIk8IvW7_XvsLQh0Y8pif4w-6pDEW0XiHouf-02WVxYc2EU2n5fgfOr_R7VQr-2v4UfNW4zdA4X_uUiVeuZksTBRhmnV7fLWaw6jZ2a39DcWymSO0xQLgZOBwMpZuc5_rFFafedjpgQxT49_t-obJVrx6h1wn-6LlZ0cPTohEkvkFQ'
  },
  {
    id: '6',
    sku: 'TC-3W-06',
    name: 'Tee Connector',
    description: 'Three-way fluid connection',
    category: 'fittings',
    diameter: '1/2" - 1"',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx02HujtSvWkixCXzNfQCpPRdJfKu33HBXMNfwUlWxy2UuY6YO-M8WmDzmzxNizD4QTO6I5QL39qFQUIVd9-lJBqjoAKsXGdK5w30sfqFIN7nU_TuyM82ftSzJnlJlc9w0WahzQjF_FoACkAnBF_BpFas1NbzzLnyA5azTRbwIGJwfQ1R51Se1zr5Xy2hHb-MCTkP9ur6fIcM4-zRzXA_hpf3xQiguaN48cYAcZrsb2iNKErhYPS4RvQBfH7Wk7XALsr6z8pq0Og'
  },
];
