import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dog, Heart, Info, Award } from "lucide-react";

const DogFact = ({ fact }) => (
  <Card className="mt-4">
    <CardHeader>
      <CardTitle className="flex items-center">
        <Info className="mr-2" />
        Did You Know?
      </CardTitle>
    </CardHeader>
    <CardContent>{fact}</CardContent>
  </Card>
);

const dogFacts = [
  "Dogs have a sense of time and can tell the difference between one hour and five hours.",
  "A dog's nose print is unique, much like a human's fingerprint.",
  "Dalmatians are born completely white and develop their spots as they grow older.",
  "The Basenji is the only breed of dog that can't bark, but they can yodel!",
  "A dog's sense of smell is 10,000 to 100,000 times stronger than a human's.",
];

const Index = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const nextFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex + 1) % dogFacts.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">The Wonderful World of Dogs</h1>
      
      <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          <TabsTrigger value="care">Dog Care</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Why Dogs are Amazing</CardTitle>
              <CardDescription>Discover the joy of canine companionship</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Dogs have been human companions for thousands of years, earning the title of "man's best friend" through their loyalty, affection, and unwavering support. These incredible animals come in a wide variety of shapes, sizes, and personalities, making them perfect pets for all types of people and lifestyles.
              </p>
              <div className="flex items-center justify-center mb-4">
                <Dog size={48} className="text-blue-500 mr-4" />
                <Heart size={48} className="text-red-500" />
              </div>
              <p>
                From providing companionship and reducing stress to encouraging exercise and social interaction, dogs enrich our lives in countless ways. Their unconditional love and ability to sense our emotions make them not just pets, but true members of the family.
              </p>
            </CardContent>
          </Card>
          
          <DogFact fact={dogFacts[currentFactIndex]} />
          <div className="mt-4 text-center">
            <Button onClick={nextFact}>Next Fact</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="breeds">
          <Card>
            <CardHeader>
              <CardTitle>Popular Dog Breeds</CardTitle>
              <CardDescription>Explore some beloved canine companions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li>Labrador Retriever - Friendly, outgoing, and high-energy</li>
                <li>German Shepherd - Intelligent, versatile, and loyal</li>
                <li>Golden Retriever - Patient, kind, and excellent with families</li>
                <li>French Bulldog - Playful, adaptable, and great for city living</li>
                <li>Beagle - Curious, merry, and wonderful with children</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="care">
          <Card>
            <CardHeader>
              <CardTitle>Essential Dog Care Tips</CardTitle>
              <CardDescription>Keep your furry friend happy and healthy</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Award className="mr-2 text-yellow-500" />
                  Provide a nutritious diet appropriate for their age and size
                </li>
                <li className="flex items-center">
                  <Award className="mr-2 text-yellow-500" />
                  Ensure regular exercise and playtime
                </li>
                <li className="flex items-center">
                  <Award className="mr-2 text-yellow-500" />
                  Schedule regular vet check-ups and keep vaccinations up to date
                </li>
                <li className="flex items-center">
                  <Award className="mr-2 text-yellow-500" />
                  Groom your dog regularly, including brushing their teeth
                </li>
                <li className="flex items-center">
                  <Award className="mr-2 text-yellow-500" />
                  Provide mental stimulation through training and interactive toys
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;