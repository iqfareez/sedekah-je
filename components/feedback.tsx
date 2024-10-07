"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Github } from 'lucide-react';
import { useEffect, useState } from 'react';

const FeedbackModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const shouldShowModal = Math.random() < 0.3; 
        const hasSeenModal = localStorage.getItem('hasSeenFeedbackModal');

        if (shouldShowModal && !hasSeenModal) {
            setIsOpen(true);
            localStorage.setItem('hasSeenFeedbackModal', 'true');
        }
    }, []);

    const handleStarRepo = () => {
        window.open('https://github.com/khrnchn/sedekah-je', '_blank');
        setIsOpen(false);
    };

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Enjoying Sedekah Je?</AlertDialogTitle>
                    <AlertDialogDescription>
                        If you find this project helpful, please consider starring our GitHub repository. It helps us reach more people and improve the project!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Maybe later</AlertDialogCancel>
                    <AlertDialogAction onClick={handleStarRepo}>
                        <Github className="mr-2 h-4 w-4" />
                        Star on GitHub
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default FeedbackModal;