import SEOHead from "@/components/SEO/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "Best EV Charger for Suffolk County Homes | 2025 Buyer's Guide",
      excerpt: "Looking to install an EV charger at home in Suffolk County? Compare Tesla, ChargePoint, and JuiceBox. Expert tips from licensed installers.",
      category: "Home Charging",
      date: "2024-01-15",
      readTime: "5 min read",
      slug: "best-ev-charger-long-island-homes"
    },
    {
      title: "EV Charger Installation Costs Suffolk County | What to Expect in 2025",
      excerpt: "How much does it cost to install an EV charger in Suffolk County? Learn price ranges, panel upgrade costs, and what impacts installation.",
      category: "Cost Guide",
      date: "2024-01-10",
      readTime: "7 min read",
      slug: "ev-charger-installation-costs-suffolk-county"
    },
    {
      title: "How to Prepare Your Suffolk County Home for EV Charger Installation",
      excerpt: "Planning an EV charger installation? Learn how to prep your panel, garage, and wiring. Licensed Suffolk County electricians explain step by step.",
      category: "Installation Guide",
      date: "2024-01-05",
      readTime: "6 min read",
      slug: "prepare-home-ev-charger-installation"
    },
    {
      title: "Tesla Wall Connector vs. Universal EV Chargers",
      excerpt: "Detailed comparison between Tesla Wall Connector and universal Level 2 chargers for Suffolk County homeowners.",
      category: "Product Comparison",
      date: "2023-12-28",
      readTime: "8 min read",
      slug: "tesla-wall-connector-vs-universal-chargers"
    },
    {
      title: "Nassau County EV Charger Permit Requirements",
      excerpt: "Complete guide to EV charger permit requirements in Nassau County, including application process and inspection procedures.",
      category: "Permits & Codes",
      date: "2023-12-20",
      readTime: "4 min read",
      slug: "nassau-county-ev-charger-permits"
    },
    {
      title: "Commercial EV Charging Station Benefits",
      excerpt: "Why Suffolk County businesses should install EV charging stations and how they benefit customers, employees, and the bottom line.",
      category: "Commercial",
      date: "2023-12-15",
      readTime: "6 min read",
      slug: "commercial-ev-charging-station-benefits"
    }
  ];

  return (
    <>
      <SEOHead 
        title="EV Charger Installation Blog | Suffolk County Electric Vehicle Charging Tips & Guides"
        description="Expert insights on EV charger installation, costs, permits, and best practices for Suffolk County homeowners and businesses. Latest EV charging news and guides."
        keywords="EV charger installation blog, electric vehicle charging tips Suffolk County, EV charger costs, Tesla charger guides, home charging station advice"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "EV Charger Installation Suffolk Blog",
            "description": "Expert insights on EV charger installation, costs, permits, and best practices for Suffolk County homeowners and businesses.",
            "url": "https://powerupevli.com/blog",
            "publisher": {"@type": "LocalBusiness", "@id": "https://powerupevli.com#company"}
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://powerupevli.com/"},
              {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://powerupevli.com/blog"}
            ]
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EV Charging <span className="text-electric-green">Knowledge Hub</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Expert insights, installation guides, and the latest news on EV charger installation throughout Suffolk County. 
              Stay informed with tips from our certified electricians.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-electric-green/10 text-electric-green">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-silver text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-navy-deep hover:text-electric-green transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center text-silver text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-silver mb-4">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full group hover:bg-electric-green hover:text-white hover:border-electric-green transition-all duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-muted/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-navy-deep mb-4">
                Stay Updated on EV Charging News
              </h3>
              <p className="text-silver mb-6 max-w-2xl mx-auto">
                Get the latest tips, guides, and news on EV charger installation delivered to your inbox. 
                Plus exclusive discounts for Suffolk County homeowners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-silver/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-green"
                />
                <Button className="bg-gradient-accent hover:scale-105 transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;