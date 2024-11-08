import { Level } from "@/types/level";

const levelData: Level[] = [
  {
    id: 1,
    title: "المستوى الأول",
    image:
      "https://startup.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fblog-03.jpg&w=1920&q=75",
    description:
      "في هذا المستوى، يبدأ الطفل 'عربي' رحلته التعليمية في مصر، حيث يلتقي بالشاعر أحمد شوقي. يكتسب مهارات اللغة العربية الأساسية من خلال التفاعل مع قصائد أحمد شوقي ويتعرف على الأدب والشعر العربي.",
    character: {
      name: "أحمد شوقي",
      description:
        "شاعر مصري يعتبر أمير الشعراء، اشتهر بأشعاره التي تمجد التراث العربي والإسلامي.",
    },
    tags: ["مصر"],
  },
  {
    id: 2,
    title: "المستوى الثاني",
    image:
      "https://startup.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fblog-02.jpg&w=1920&q=75",
    description:
      "في هذا المستوى، يسافر 'عربي' إلى سوريا حيث يلتقي بالشاعر نزار قباني. يتعلم عن الأدب الرومانسي ويكتسب مهارات جديدة في التعبير اللغوي من خلال الشعر الرومانسي.",
    character: {
      name: "نزار قباني",
      description:
        "شاعر سوري معروف بأشعاره الرومانسية وأعماله التي تعبر عن الحب والحنين.",
    },
    tags: ["سوريا"],
  },
  {
    id: 3,
    title: "المستوى الثالث",
    image:
      "https://startup.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fblog-03.jpg&w=1920&q=75",
    description:
      "في هذا المستوى، ينتقل 'عربي' إلى العراق حيث يلتقي بالشاعر بدر شاكر السياب. يتعرف على الأدب الحديث ويطور مهاراته في الفهم والتعبير من خلال نصوص أدبية تعكس قضايا اجتماعية وثقافية.",
    character: {
      name: "بدر شاكر السياب",
      description:
        "شاعر عراقي يُعتبر من رواد الشعر الحديث، وقد استخدم قصائده للتعبير عن قضايا المجتمع.",
    },
    tags: ["العراق"],
  },
];

export default levelData;
