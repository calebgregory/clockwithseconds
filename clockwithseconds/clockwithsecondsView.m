//
//  clockwithsecondsView.m
//  clockwithseconds
//
//  Created by caleb on 8/12/23.
//

#import "clockwithsecondsView.h"

#import <WebKit/WebKit.h>

@implementation clockwithsecondsView

- (id)initWithFrame:(NSRect)frame isPreview:(BOOL)isPreview
{
    self = [super initWithFrame:frame isPreview:isPreview];
    if (self) {
        WKWebViewConfiguration *webViewConfig = [[WKWebViewConfiguration alloc] init];
        WKWebView *webView = [[WKWebView alloc] initWithFrame:self.bounds configuration:webViewConfig];
        [self addSubview:webView];

        // Load your locally-defined index.html
        NSString *htmlFilePath = [[NSBundle bundleForClass:[self class]] pathForResource:@"index" ofType:@"html"];
        NSURL *htmlURL = [NSURL fileURLWithPath:htmlFilePath];
        [webView loadFileURL:htmlURL allowingReadAccessToURL:htmlURL];
    }

    return self;
}

- (BOOL)hasConfigureSheet
{
    return NO;
}

- (NSWindow*)configureSheet
{
    return nil;
}

@end
