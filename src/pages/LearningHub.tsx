import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Play, 
  BookOpen, 
  ExternalLink, 
  Filter,
  Globe,
  Tag
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface VideoTutorial {
  id: string;
  title: string;
  source: string;
  language: "English" | "Hindi" | "Other";
  category: "Crop" | "Fertilizer" | "Pest" | "Irrigation" | "Government Schemes" | "Women Empowerment" | "Other";
  thumbnail: string;
  youtubeUrl: string;
  duration: string;
}

interface TextTutorial {
  id: string;
  title: string;
  description: string;
  source: string;
  language: "English" | "Hindi";
  category: "Crop" | "Fertilizer" | "Pest" | "Irrigation" | "Government Schemes" | "Women Empowerment";
  url: string;
  readTime: string;
}

/**
 * Updated videoTutorials: 10 videos from ICAR and ICAR institutes
 * (thumbnails use YouTube's img.youtube.com/vi/<id>/maxresdefault.jpg)
 */
const videoTutorials: VideoTutorial[] = [
  {
    id: "s9afVoIRReU",
    title: "Organic Coconut Farming - CPCRI Kasaragod (Organic Coconut Cultivation)",
    source: "ICAR - CPCRI",
    language: "English",
    category: "Crop",
    thumbnail: "https://img.youtube.com/vi/s9afVoIRReU/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=s9afVoIRReU",
    duration: "31:09"
  },
  {
    id: "VYHPyhlrrAc",
    title: "Integrated Disease Management (IDM) - English (CPCRI)",
    source: "ICAR - CPCRI",
    language: "English",
    category: "Pest",
    thumbnail: "https://img.youtube.com/vi/VYHPyhlrrAc/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=VYHPyhlrrAc",
    duration: "—"
  },
  {
    id: "X3kFmcLE0co",
    title: "World Coconut Day: CPCRI Technologies on Production and Processing of Coconut",
    source: "ICAR - CPCRI",
    language: "English",
    category: "Crop",
    thumbnail: "https://img.youtube.com/vi/X3kFmcLE0co/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=X3kFmcLE0co",
    duration: "29:00"
  },
  {
    id: "INvk82Mx4Gc",
    title: "Improved varieties of coconut - ICAR CPCRI (variety / cultivation tips)",
    source: "ICAR - CPCRI",
    language: "English",
    category: "Crop",
    thumbnail: "https://img.youtube.com/vi/INvk82Mx4Gc/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=INvk82Mx4Gc",
    duration: "—"
  },
  {
    id: "Du6GKd02R-0",
    title: "Paddy Cultivation using Nanotechnology (ICAR / IARI - research & practices)",
    source: "ICAR / IARI",
    language: "English",
    category: "Crop",
    thumbnail: "https://img.youtube.com/vi/Du6GKd02R-0/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=Du6GKd02R-0",
    duration: "—"
  },
  {
    id: "adhQSQt3FcA",
    title: "ICAR-IARI - Rice Breeding & Genetics (cultivation & variety info)",
    source: "ICAR - IARI",
    language: "Other",
    category: "Crop",
    thumbnail: "https://img.youtube.com/vi/adhQSQt3FcA/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=adhQSQt3FcA",
    duration: "—"
  },
  {
    id: "SapSQFWpYAQ",
    title: "ICAR IIHR - A Short Documentary on High Yielding F1 Chilli (cultivation practices)",
    source: "ICAR - IIHR",
    language: "English",
    category: "Crop",
    thumbnail: "https://img.youtube.com/vi/SapSQFWpYAQ/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=SapSQFWpYAQ",
    duration: "—"
  },
  {
    id: "cNglAXexbUY",
    title: "Prosperity Through Quality Seedling Production (ICAR-IIHR nursery / seedling practices)",
    source: "ICAR - IIHR",
    language: "English",
    category: "Crop",
    thumbnail: "https://img.youtube.com/vi/cNglAXexbUY/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=cNglAXexbUY",
    duration: "—"
  },
  {
    id: "E9ENKMFQS4g",
    title: "Podcast: Biochar — A Technology for Resilient Agricultural Ecosystems (ICAR-RC NEH)",
    source: "ICAR RC NEH / Podcast",
    language: "English",
    category: "Other",
    thumbnail: "https://img.youtube.com/vi/E9ENKMFQS4g/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=E9ENKMFQS4g",
    duration: "—"
  },
  {
    id: "AH8YSTJX6I4",
    title: "Sweet Potato: Cultivation Practices (ICAR RC NEH expert talk)",
    source: "ICAR RC NEH",
    language: "English",
    category: "Crop",
    thumbnail: "https://img.youtube.com/vi/AH8YSTJX6I4/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=AH8YSTJX6I4",
    duration: "—"
  }
];

const textTutorials: TextTutorial[] = [
  {
    id: "1",
    title: "Comprehensive Guide to Organic Farming Practices in India",
    description: "Detailed manual covering all aspects of organic farming including certification, composting, and market linkages.",
    source: "ICAR - National Centre for Organic Farming",
    language: "English",
    category: "Crop",
    url: "https://ncof.dacnet.nic.in/Training_manuals/Training_manuals_english/Comprehensive_Guide_Organic_Farming.pdf",
    readTime: "45 min"
  },
  {
    id: "2",
    title: "Integrated Nutrient Management for Sustainable Agriculture",
    description: "Guidelines for balanced fertilizer use, soil health improvement, and sustainable nutrient management practices.",
    source: "Indian Institute of Soil Science - ICAR",
    language: "English",
    category: "Fertilizer",
    url: "https://www.iiss.nic.in/sites/default/files/technologies/Integrated_Nutrient_Management.pdf",
    readTime: "30 min"
  },
  {
    id: "3",
    title: "Pradhan Mantri Fasal Bima Yojana - Complete Guidelines",
    description: "Detailed information about crop insurance scheme, coverage, premium, and claim procedures.",
    source: "Ministry of Agriculture & Farmers Welfare",
    language: "English",
    category: "Government Schemes",
    url: "https://pmfby.gov.in/pdf/PMFBY_Guidelines_English.pdf",
    readTime: "30 min"
  },
  {
    id: "4",
    title: "Women in Agriculture - Empowerment and Opportunities",
    description: "Comprehensive report on women's role in agriculture, available schemes, and empowerment initiatives.",
    source: "FAO India & UN Women",
    language: "English",
    category: "Women Empowerment",
    url: "https://www.fao.org/3/i3153e/i3153e.pdf",
    readTime: "35 min"
  }
];

const categories = ["All", "Crop", "Fertilizer", "Pest", "Irrigation", "Government Schemes", "Women Empowerment", "Other"];
const languages = ["All", "English", "Hindi", "Other"];

const LearningHub = () => {
  const [videoLanguageFilter, setVideoLanguageFilter] = useState("All");
  const [videoCategoryFilter, setVideoCategoryFilter] = useState("All");
  const [textLanguageFilter, setTextLanguageFilter] = useState("All");
  const [textCategoryFilter, setTextCategoryFilter] = useState("All");

  const filteredVideos = videoTutorials.filter(video => {
    const languageMatch = videoLanguageFilter === "All" || video.language === videoLanguageFilter;
    const categoryMatch = videoCategoryFilter === "All" || video.category === videoCategoryFilter;
    return languageMatch && categoryMatch;
  });

  const filteredTexts = textTutorials.filter(text => {
    const languageMatch = textLanguageFilter === "All" || text.language === textLanguageFilter;
    const categoryMatch = textCategoryFilter === "All" || text.category === textCategoryFilter;
    return languageMatch && categoryMatch;
  });

  const handleVideoClick = (youtubeUrl: string) => {
    window.open(youtubeUrl, '_blank');
  };

  const handleTextClick = (url: string) => {
    window.open(url, '_blank');
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Crop": "bg-primary text-primary-foreground",
      "Fertilizer": "bg-earth text-earth-dark",
      "Pest": "bg-destructive text-destructive-foreground", 
      "Irrigation": "bg-sage text-sage-dark",
      "Government Schemes": "bg-accent text-accent-foreground",
      "Women Empowerment": "bg-primary-light text-primary-foreground",
      "Other": "bg-muted text-muted-foreground"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Learning Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive agricultural knowledge through videos and articles from trusted Indian institutions like ICAR.
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Video Tutorials
            </TabsTrigger>
            <TabsTrigger value="texts" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Text Tutorials
            </TabsTrigger>
          </TabsList>

          {/* Video Tutorials */}
          <TabsContent value="videos">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-6 p-4 bg-card rounded-lg border">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <Select value={videoLanguageFilter} onValueChange={setVideoLanguageFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map(language => (
                        <SelectItem key={language} value={language}>
                          {language}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  <Select value={videoCategoryFilter} onValueChange={setVideoCategoryFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card 
                      className="agricultural-card cursor-pointer group"
                      onClick={() => handleVideoClick(video.youtubeUrl)}
                    >
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                        {video.duration && video.duration !== "—" && (
                          <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                            {video.duration}
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {video.source}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            {video.language}
                          </Badge>
                          <Badge className={`text-xs ${getCategoryColor(video.category)}`}>
                            {video.category}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Text Tutorials */}
          <TabsContent value="texts">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-6 p-4 bg-card rounded-lg border">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <Select value={textLanguageFilter} onValueChange={setTextLanguageFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map(language => (
                        <SelectItem key={language} value={language}>
                          {language}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  <Select value={textCategoryFilter} onValueChange={setTextCategoryFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Text List */}
              <div className="space-y-4">
                {filteredTexts.map((text, index) => (
                  <motion.div
                    key={text.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card 
                      className="agricultural-card cursor-pointer group"
                      onClick={() => handleTextClick(text.url)}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                              {text.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {text.description}
                            </CardDescription>
                          </div>
                          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors ml-4" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs">
                              {text.language}
                            </Badge>
                            <Badge className={`text-xs ${getCategoryColor(text.category)}`}>
                              {text.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{text.readTime}</span>
                            <span>•</span>
                            <span>{text.source}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LearningHub;