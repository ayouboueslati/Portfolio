import React, { useEffect, useState } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  useColorMode,
  useTheme,
  Skeleton,
  Text,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import projects from '../data/projectsData';

const cardVariants = {
  initial: { scale: 0.95, opacity: 0.8 },
  animate: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

const ResponsiveProjectsTabs = () => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  const bgColor = colorMode === 'light' ? '#F4F4F9' : '#1E2025';
  const cardBgColor = colorMode === 'light' ? '#E8E8F1' : '#2C2F36';
  const textColor = colorMode === 'light' ? '#333' : '#EAEAEA';
  const titleColor = colorMode === 'light' ? '#FF6347' : '#FF6B6B';
  const hoverBgColor = colorMode === 'light' ? '#FFDDC1' : '#444B53';
 
  const borderRadius = '12px';
  const shadowEffect = '0 4px 8px rgba(0, 0, 0, 0.1)';

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto py-6 px-4">
      <Tabs orientation="horizontal" colorScheme={colorMode === 'light' ? 'orange' : 'teal'}>
        <TabList
          style={{
            display: 'flex',
            overflowX: 'auto', // Allow horizontal scrolling
            padding: '16px',
            marginBottom: '24px',
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          {projects.map((project, index) => (
            <Tab
              key={index}
              className="p-4 rounded-xl bg-opacity-90 hover:bg-opacity-100 transition-all duration-300"
              style={{
                backgroundColor: cardBgColor,
                borderRadius,
                boxShadow: shadowEffect,
                border: 'none',
                flex: '0 0 auto', // Ensure tabs maintain their width
                minWidth: '150px', // Adjust this value as needed
                maxWidth: '200px', // Adjust this value as needed
              }}
              _selected={{
                background: hoverBgColor,
                boxShadow: '0 10px 20px rgba(255, 99, 71, 0.2)',
              }}
            >
              <motion.div
                initial="initial"
                animate="animate"
                variants={cardVariants}
              >
                <div className="text-center">
                  {loading ? (
                    <Skeleton height="22px" width="120px" mb={3} />
                  ) : (
                    <h3 className="text-lg font-semibold" style={{ color: titleColor }}>
                      {project.title}
                    </h3>
                  )}
                </div>
              </motion.div>
            </Tab>
          ))}
        </TabList>

        <TabPanels className="w-full mt-6">
          {projects.map((project, index) => (
            <TabPanel key={index}>
              <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
                <Box flex={1}>
                  {loading ? (
                    <Skeleton height="300px" borderRadius={borderRadius} />
                  ) : (
                    <motion.img
                      src={project.imagePath}
                      alt={project.title}
                      className="w-full h-auto rounded-lg shadow-lg object-cover"
                      style={{ boxShadow: shadowEffect }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  )}
                </Box>
                <Box flex={1}>
                  {loading ? (
                    <>
                      <Skeleton height="24px" width="80%" mb={4} />
                      <Skeleton height="18px" width="100%" mb={2} />
                      <Skeleton height="18px" width="90%" mb={2} />
                      <Skeleton height="18px" width="95%" />
                    </>
                  ) : (
                    <>
                      <Text fontSize="xx-large" fontWeight="extrabold" color={titleColor} mb={4}>
                        {project.title}
                      </Text>
                      <Text color={textColor} fontSize={'larger'} fontStyle={'italic'} mb={4}>
                        {project.description}
                      </Text>
                      <Text mt={4} fontWeight="semibold" color={titleColor} fontSize={'larger'}>
                        Technology: {project.technology}
                      </Text>
                    </>
                  )}
                </Box>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ResponsiveProjectsTabs;
